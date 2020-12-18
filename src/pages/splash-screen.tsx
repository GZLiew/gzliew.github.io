import { GetStaticProps } from 'next'

import LanguagesContext from '@/lib/context/LanguagesContext'

import SplashScreen from '@/components/SplashScreen'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

import { getHotelConfiguration, getLanguageCodes, getSplashScreen } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { SplashScreenProps } from '@/lib/types/splashScreen'

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  splashScreen?: SplashScreenProps
  preview?: boolean
}

export default function SplashScreenPage({ allLangs, hotelConfig, splashScreen, preview }: Props) {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />

        <SplashScreen blok={splashScreen?.content} blokConfig={hotelConfig?.content} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const splashScreen = (await getSplashScreen(preview)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { allLangs, splashScreen, hotelConfig, preview } }
}
