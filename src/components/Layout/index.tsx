import React, { ReactNode } from 'react'
import { ThemeProvider } from '@emotion/react'
import { IntlProvider } from 'react-intl'
import { isFunction } from 'lodash'

import { light, dark } from '@/lib/theme'
import AppTranslations from '@/lib/translations'
import brandColors from '@/lib/theme/brandColors'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { ILayoutNavigationLink } from '@/lib/types/commonLayout'

import GlobalStyles from './GlobalStyles'
import FallbackLoader from '../FallbackLoader'

type ChildrenProps = Omit<Props, 'children'>

interface Props {
  children?: JSX.Element | ((props: ChildrenProps) => ReactNode) | ReactNode
  preview?: boolean
  hotelConfig?: HotelConfigProps
  navLinks?: ILayoutNavigationLink[]
}

const Layout = (props: Props) => {
  const { children, ...childrenProps } = props
  const { hotelConfig } = childrenProps
  const brandColor = hotelConfig?.content?.brandColor || brandColors.blue
  const languageChosen = hotelConfig?.lang === 'default' || !hotelConfig?.lang ? 'en' : hotelConfig.lang
  const currentAppLocale = AppTranslations[languageChosen]

  return (
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <ThemeProvider
        theme={{
          ...(hotelConfig?.content?.theme === 'light' ? light : dark),
          brandColors: {
            primary: brandColor.primary,
            secondary: brandColor.secondary
          }
        }}>
        <FallbackLoader>
          <GlobalStyles />
          {isFunction(children) ? children(childrenProps) : children}
        </FallbackLoader>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default Layout
