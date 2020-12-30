import { GetStaticProps } from 'next'

import LanguagesContext from '@/lib/context/LanguagesContext'

import SEO from '@/components/SEO'
import Layout from '@/components/DefaultLayout'
import Navigation from '@/components/navigation'

import { getHotelConfiguration, getHotelGlobalNavigation, getLanguageCodes } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { ICommonLayout } from '@/lib/types/commonLayout'

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  layoutNavigation?: ICommonLayout
  preview?: boolean
}

export default function NavigationPage({ allLangs, hotelConfig, layoutNavigation, preview }: Props) {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout navLinks={layoutNavigation?.links} hotelConfig={hotelConfig} preview={preview}>
        <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />
        <Navigation content={layoutNavigation} blokConfig={hotelConfig?.content} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const layoutNavigation = (await getHotelGlobalNavigation(preview)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { allLangs, layoutNavigation: layoutNavigation?.content, hotelConfig } }
}
