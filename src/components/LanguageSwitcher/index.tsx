import React, { useContext, useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useTheme } from "@emotion/react"
import { useTransition } from "react-spring"

import LanguagesContext from "@/lib/context/LanguagesContext"

import Link from "next/link"

import { SwitcherButton, ItemsWrapper, Item } from "./languageSwitcher.styles"

import SwitcherIcon from "@/assets/icons/language-switcher"

import ISO6391 from "iso-639-1"

interface Props {
  isNavbarOpen: boolean
}

const LanguageSwitcher: React.FC<Props> = ({ isNavbarOpen }) => {
  const router = useRouter()
  const theme = useTheme()
  const languages = useContext(LanguagesContext)
  const [activeLang, setActiveLang] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  // slide from the left transition
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: `translateX(-100%)` },
    enter: { opacity: 1, transform: `translateX(0%)` },
    leave: { opacity: 0, transform: `translateX(-100%)` },
    immediate: !isNavbarOpen
  })

  // set the active language that matches the router language query value
  useEffect(() => {
    setActiveLang(
      languages.find((lang) => {
        if (!router?.query?.language) return "en"
        return lang === router?.query?.language
      })
    )
  }, [router?.query?.language])

  // close ItemsWrapper if the Navbar gets closed
  useEffect(() => {
    if (!isNavbarOpen) {
      setIsOpen(false)
    }
  }, [isNavbarOpen])

  const getLinkProps = (lang: string): { href: string; as?: string } => {
    let href = lang === "en" ? "/" : "/[language]"
    let as = lang === "en" ? "/" : `/${lang}`

    // if we're on the default language
    if (!router?.query?.language) {
      const [, routerSlug] = router?.route?.split("/")
      const slug = routerSlug ? `/${routerSlug}` : ""
      if (router?.route === "/") return { href, as }
      return { href: href + slug, as: as + slug }
    }

    // if we're in a [language] page
    const [, routerSlug] = router?.route?.split("[language]/")
    const slug = routerSlug ? `/${routerSlug}` : ""

    return { href: href + slug, as: as + slug }
  }

  const handleLangSwitcherClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation() // prevent Navbar from closing
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <SwitcherButton onClick={handleLangSwitcherClick}>
        <SwitcherIcon
          primaryColor={theme?.colors?.[theme?.primaryColor]?.primary}
          altColor={theme?.colors?.[theme?.primaryColor]?.secondary}
        />
      </SwitcherButton>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <ItemsWrapper key={key} style={props}>
              {languages.map((lang) => (
                <Link key={lang} {...getLinkProps(lang)} data-lang={lang}>
                  <Item isActive={activeLang === lang}>{ISO6391.getName(lang)}</Item>
                </Link>
              ))}
            </ItemsWrapper>
          )
      )}
    </React.Fragment>
  )
}

export default LanguageSwitcher
