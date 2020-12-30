import { GetStaticPaths, GetStaticProps } from 'next'

import getLocalizedPaths from '@/lib/utils/getLocalizedPaths'

import LanguagesContext from '@/lib/context/LanguagesContext'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

import { getHotelGlobalNavigation, getHotelConfiguration, getLanguageCodes } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { ICommonLayout } from '@/lib/types/commonLayout'

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  layoutNavigation?: ICommonLayout
  preview?: boolean
}

const NavigationPage = ({ allLangs, layoutNavigation, hotelConfig }: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout navLinks={layoutNavigation?.links} hotelConfig={hotelConfig}>
        <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default NavigationPage

export const getStaticPaths: GetStaticPaths = () => getLocalizedPaths()

export const getStaticProps: GetStaticProps = async ({ preview = null, params }) => {
  const hotelConfig = (await getHotelConfiguration(preview, params?.language as string)) || []
  const layoutNavigation = (await getHotelGlobalNavigation(preview, params?.language as string)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { params, allLangs, layoutNavigation: layoutNavigation?.content, hotelConfig } }
}
