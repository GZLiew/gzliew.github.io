import { useTheme } from '@emotion/react'
import { isFunction, throttle } from 'lodash'
import { useState, useEffect, useRef, ReactNode } from 'react'
import { useSpring } from 'react-spring'

import { useRouter } from 'next/router'

import Navbar from '../Navbar'
import Button from '../Button'

import { LogoWrapper, HeaderContainer, HeaderBackground, Logo, HamburgerMenuIcon } from './header.styles'

import BackIcon from '@/assets/icons/wt-ic-back'
import NotificationIcon from '../../assets/icons/wt-ic-notification.svg'

import { HotelLogo } from '@/lib/types/hotelConfig'
import { ILayoutNavigationLink } from '@/lib/types/commonLayout'

import useToggle from '@/lib/hooks/useToggle'
import getLocalizedSlug from '@/lib/utils/getLocalizedSlug'
import { useHeaderHeight } from '@/components/Providers/HeaderHeightProvider'

type TitleProps = Omit<Props, 'title'> & { hasScrolled?: boolean }
export type Title = ((props: TitleProps) => ReactNode) | ReactNode

interface Props {
  hotelLogo?: HotelLogo
  hotelLogoDark?: HotelLogo
  navLinks?: ILayoutNavigationLink[]
  title?: Title
  rightElement?: ReactNode
}

const Header = (props: Props) => {
  const { title, rightElement, ...titleProps } = props
  const { hotelLogo, hotelLogoDark, navLinks } = titleProps
  const theme = useTheme()
  const router = useRouter()
  const { setHeaderHeight } = useHeaderHeight()
  const validHomePaths = ['/', '/home', '/editor']
  const isHome = validHomePaths.some((path) => {
    // check if route is "/"
    if (!router) return false
    if (router.route === path) return router.route === path
    // check if route is "[language]/"
    if (path === '/') return router.route === `${path}[language]`
    // check if route is "[language]/any-other-path"
    return router.route === `/[language]${path}`
  })
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isNavbarOpen, toggleNavbar] = useToggle(false)
  const ref = useRef<HTMLDivElement>()
  const headerRef = useRef<boolean>()
  headerRef.current = hasScrolled

  const themeHotelLogo = theme.mode === 'light' ? hotelLogo : hotelLogoDark

  const localizedHomeRoute = getLocalizedSlug('/')

  const [logoProps, setLogoProps] = useSpring(() => ({
    opacity: isHome ? 1 : 0
  }))

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight)
    }
  }, [])

  // Listen to scroll event and toggle show flag when page has scrolled a certain amount
  useEffect(() => {
    const handleScroll = () => {
      const show = global.window.scrollY > 20
      if (headerRef.current !== show) {
        setHasScrolled(show)
        if (!isHome) {
          setLogoProps({ opacity: show ? 1 : 0, delay: show ? 250 : 0, immediate: !show })
        }
      }
    }
    // Throttle the event listener callback for better performance
    // See: https://css-tricks.com/debouncing-throttling-explained-examples/#throttle
    global?.window?.document.addEventListener('scroll', throttle(handleScroll, 100))
    return () => {
      global?.window?.document.removeEventListener('scroll', throttle(handleScroll, 100))
    }
  }, [])

  const backToHome = () => {
    if (!router) return false
    router.push(localizedHomeRoute)
  }

  return (
    <>
      <Navbar
        navLinks={navLinks}
        isOpen={isNavbarOpen}
        guestPhoto={themeHotelLogo}
        handleNavbarClick={toggleNavbar}
      />
      <HeaderContainer ref={ref}>
        <HeaderBackground hasScrolled={hasScrolled} />
        <LogoWrapper>
          <Button onClick={isHome ? toggleNavbar : backToHome} bgColor="white">
            {isHome ? <HamburgerMenuIcon /> : <BackIcon />}
          </Button>
          {isFunction(title) && title({ ...titleProps, hasScrolled })}
          {!isFunction(title) ? title : null}
          {!title && (
            <Logo
              src={themeHotelLogo?.filename}
              alt={themeHotelLogo?.name}
              title={themeHotelLogo?.name}
              style={logoProps}
            />
          )}
          {isHome ? (
            <Button bgColor="white">
              <NotificationIcon />
            </Button>
          ) : null}
          {rightElement}
        </LogoWrapper>
      </HeaderContainer>
    </>
  )
}

export default Header
