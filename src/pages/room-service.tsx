import { GetStaticProps } from "next"

import LanguagesContext from "@/lib/context/LanguagesContext"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"

import { getHotelConfiguration, getHotelInformation, getLanguageCodes } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HotelInfoProps } from "@/lib/types/hotelInfo"
import RoomService from "@/components/RoomService"

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
}

const RoomServicePage = ({ allLangs, hotelInfo, hotelConfig, preview }: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title="Room Services" hotelConfig={hotelConfig} />
        <RoomService blok={hotelInfo?.content} blokConfig={hotelConfig?.content} preview={preview} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default RoomServicePage

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const hotelInfo = (await getHotelInformation(preview)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ["en", ...langCodes]

  return { props: { allLangs, hotelInfo, hotelConfig, preview } }
}
