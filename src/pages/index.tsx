import { GetStaticProps } from "next"
import Head from "next/head"

import Home from "@/components/Home"
import Layout from "@/components/Layout"

import { getHotelConfiguration, getHomeData, getHotelGlobalNavigation } from "@/lib/api"
import { HomeProps } from "@/lib/types/home"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { NavigationType } from "@/lib/types/linkItem"

interface Props {
  hotelConfig?: HotelConfigProps
  homeData?: HomeProps
  layoutNavigation?: NavigationType
  preview?: boolean
}

export default function HomePage({ hotelConfig, homeData, layoutNavigation, preview }: Props) {
  return (
    <Layout navLinks={layoutNavigation?.navigation} hotelConfig={hotelConfig} preview={preview}>
      <Head>
        <title>Welcome to {hotelConfig?.content?.hotel_name}</title>
      </Head>
      <Home blok={homeData} blokConfig={hotelConfig?.content} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const homeData = (await getHomeData(preview)) || []
  const layoutNavigation = (await getHotelGlobalNavigation(preview)) || []

  return {
    props: { hotelConfig, homeData, layoutNavigation, preview }
  }
}
