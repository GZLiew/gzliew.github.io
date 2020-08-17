import { GetStaticProps, GetStaticPaths } from "next"

import getLocalizedPaths from "@/lib/utils/getLocalizedPaths"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import HotelInformation from "@/components/HotelInformation"

import { getHotelInformation, getHotelConfiguration } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HotelInfoProps } from "@/lib/types/hotelInfo"

interface Props {
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
}

const HotelInformationPage = ({ hotelInfo, hotelConfig, preview }: Props) => {
  return (
    <Layout hotelConfig={hotelConfig}>
      <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />

      <HotelInformation blok={hotelInfo?.content} blokConfig={hotelConfig?.content} />
    </Layout>
  )
}

export default HotelInformationPage

export const getStaticPaths: GetStaticPaths = () => getLocalizedPaths()

export const getStaticProps: GetStaticProps = async ({ preview = null, params }) => {
  const hotelInfo = (await getHotelInformation(preview, params?.language as string)) || []
  const hotelConfig = (await getHotelConfiguration(preview, params?.language as string)) || []

  return { props: { params, hotelInfo, hotelConfig, preview } }
}
