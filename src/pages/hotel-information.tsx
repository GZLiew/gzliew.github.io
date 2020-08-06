import { GetStaticProps } from "next"
import Head from "next/head"

import HotelInformation from "@/components/HotelInformation"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"

import { getHotelConfiguration, getHotelInformation } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HotelInfoProps } from "@/lib/types/hotelInfo"

interface Props {
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
}

export default function HotelInformationPage({ hotelConfig, hotelInfo, preview }: Props) {
  return (
    <Layout hotelConfig={hotelConfig} preview={preview}>
      <SEO title="Hotel Information" hotelConfig={hotelConfig} />

      <HotelInformation blok={hotelInfo?.content} blokConfig={hotelConfig?.content} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const hotelInfo = (await getHotelInformation(preview)) || []

  return {
    props: { hotelConfig, hotelInfo, preview }
  }
}
