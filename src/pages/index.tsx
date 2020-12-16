import { GetStaticProps } from 'next'

import LanguagesContext from '@/lib/context/LanguagesContext'

import Home from '@/components/Home'
import Layout from '@/components/DefaultLayout'
import SEO from '@/components/SEO'

import { getHotelConfiguration, getHomeData, getHotelGlobalNavigation, getLanguageCodes } from '@/lib/api'
import { HomeBlok } from '@/lib/types/homeContent'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { ICommonLayout } from '@/lib/types/commonLayout'

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  blok?: HomeBlok
  layoutNavigation?: ICommonLayout
  preview?: boolean
}

export default function HomePage({ allLangs, hotelConfig, blok, layoutNavigation, preview }: Props) {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout navLinks={layoutNavigation?.navigation} hotelConfig={hotelConfig} preview={preview}>
        <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />

        <Home content={blok?.content} blokConfig={hotelConfig?.content} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const blok = (await getHomeData(preview)) || []
  const layoutNavigation = (await getHotelGlobalNavigation(preview)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { allLangs, layoutNavigation: layoutNavigation?.content, blok, hotelConfig } }
}
