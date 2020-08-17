import { GetStaticPaths, GetStaticProps } from "next"

import getLocalizedPaths from "@/lib/utils/getLocalizedPaths"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import Home from "@/components/Home"

import { getHotelGlobalNavigation, getHomeData, getHotelConfiguration } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HomeContent } from "@/lib/types/homeContent"
import { ICommonLayout } from "@/lib/types/commonLayout"

interface Props {
  hotelConfig?: HotelConfigProps
  homeContent?: HomeContent
  layoutNavigation?: ICommonLayout
  preview?: boolean
}

const HomePage = ({ layoutNavigation, homeContent, hotelConfig }: Props) => {
  return (
    <Layout navLinks={layoutNavigation?.navigation} hotelConfig={hotelConfig}>
      <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />

      <Home blok={homeContent} blokConfig={hotelConfig?.content} />
    </Layout>
  )
}

export default HomePage

export const getStaticPaths: GetStaticPaths = () => getLocalizedPaths()

export const getStaticProps: GetStaticProps = async ({ preview = null, params }) => {
  const hotelConfig = (await getHotelConfiguration(preview, params?.language as string)) || []
  const layoutNavigation = (await getHotelGlobalNavigation(preview, params?.language as string)) || []
  const homeContent = (await getHomeData(preview, params?.language as string)) || []

  return { props: { params, layoutNavigation, homeContent, hotelConfig } }
}
