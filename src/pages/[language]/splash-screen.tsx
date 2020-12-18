import { GetStaticProps, GetStaticPaths } from 'next'

import getLocalizedPaths from '@/lib/utils/getLocalizedPaths'

import LanguagesContext from '@/lib/context/LanguagesContext'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import SplashScreen from '@/components/SplashScreen'

import { getHotelConfiguration, getLanguageCodes, getSplashScreen } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { SplashScreenProps } from '@/lib/types/splashScreen'

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  splashScreen?: SplashScreenProps
  preview?: boolean
}

const SplashScreenPage = ({ allLangs, splashScreen, hotelConfig, preview }: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />

        <SplashScreen blok={splashScreen?.content} blokConfig={hotelConfig?.content} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default SplashScreenPage

export const getStaticPaths: GetStaticPaths = () => getLocalizedPaths()

export const getStaticProps: GetStaticProps = async ({ preview = null, params }) => {
  const splashScreen = (await getSplashScreen(preview, params?.language as string)) || []
  const hotelConfig = (await getHotelConfiguration(preview, params?.language as string)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { params, allLangs, splashScreen, hotelConfig, preview } }
}
