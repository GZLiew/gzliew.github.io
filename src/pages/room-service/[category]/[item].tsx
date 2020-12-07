import { GetStaticProps, GetStaticPaths } from "next"

import getLocalizedPaths from "@/lib/utils/getLocalizedPaths"

import LanguagesContext from "@/lib/context/LanguagesContext"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import RoomServiceItem from "@/components/RoomServiceItem"

import { getHotelInformation, getHotelConfiguration, getLanguageCodes } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HotelInfoProps } from "@/lib/types/roomService"
import { allItems, getItemMock } from "@/components/RoomService/mock"
import { SERVICES } from "@/components/RoomService"
import { mergePaths } from "@/lib/utils/mergePaths"

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
  params?: { item: string }
}

const RoomServiceItemPage = ({ allLangs, hotelInfo, hotelConfig, preview, params }: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig}>
        <SEO title={`Welcome to ${hotelConfig?.content?.hotelName}`} hotelConfig={hotelConfig} />

        <RoomServiceItem
          blok={hotelInfo?.content}
          blokConfig={hotelConfig?.content}
          preview={preview}
          params={params}
        />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default RoomServiceItemPage

export const getStaticPaths: GetStaticPaths = async () => {
  const localeResult = await getLocalizedPaths()
  const categoriesPaths = Object.keys(SERVICES).map((category) => ({ params: { category } }))
  const itemsPaths = allItems.map((item) => ({ params: { item: item._uid } })).slice(0, 1)
  const combinedPaths = mergePaths(localeResult.paths, categoriesPaths, itemsPaths)

  return { paths: combinedPaths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ preview = null, params }) => {
  const hotelInfo = (await getHotelInformation(preview)) || []
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const item = await getItemMock(params?.item as string)
  if (!Array.isArray(hotelInfo) && hotelInfo && hotelInfo.content) {
    hotelInfo.content.roomServiceItem = item || null
  }
  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ["en", ...langCodes]

  return { props: { params, allLangs, hotelInfo, hotelConfig, preview }, revalidate: 2 }
}
