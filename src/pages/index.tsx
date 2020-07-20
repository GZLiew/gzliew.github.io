import { GetStaticProps } from "next"
import Head from "next/head"

import Home from "@/components/Home"
import Layout from "@/components/Layout"

import { getHotelConfiguration, getHomeData, getHotelGlobalNavigation } from "@/lib/api"
import { HomeContent } from "@/lib/types/homeContent"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { ICommonLayout } from "@/lib/types/commonLayout"

interface Props {
  hotelConfig?: HotelConfigProps
  homeContent?: HomeContent
  layoutNavigation?: ICommonLayout
  preview?: boolean
}

export default function HomePage({ hotelConfig, homeContent, layoutNavigation, preview }: Props) {
  return (
    <Layout navLinks={layoutNavigation?.navigation} hotelConfig={hotelConfig} preview={preview}>
      <Head>
        <title>Welcome to {hotelConfig?.content?.hotel_name}</title>
      </Head>
      <Home blok={homeContent} blokConfig={hotelConfig?.content} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const homeContent = (await getHomeData(preview)) || []
  const layoutNavigation = (await getHotelGlobalNavigation(preview)) || []

  return {
    props: { hotelConfig, homeContent, layoutNavigation, preview }
  }
}
