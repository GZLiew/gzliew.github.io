import { GetStaticProps, GetStaticPaths } from "next"

import LanguagesContext from "@/lib/context/LanguagesContext"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"

import { getHotelConfiguration, getHotelInformation, getLanguageCodes } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HotelInfoProps } from "@/lib/types/roomService"
import RoomService, { SERVICES } from "@/components/RoomService"
import { getCategoriesMock } from "@/components/RoomService/mock"
import getLocalizedPaths from "@/lib/utils/getLocalizedPaths"
import { mergePaths } from "@/lib/utils/mergePaths"

type Params = {
  language: string
  category: string
}

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
  params?: Params
}

const RoomServicePage = ({ allLangs, hotelInfo, hotelConfig, preview, params }: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title="Room Services" hotelConfig={hotelConfig} />
        <RoomService
          blok={hotelInfo?.content}
          blokConfig={hotelConfig?.content}
          preview={preview}
          category={params?.category}
        />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default RoomServicePage

export const getStaticPaths: GetStaticPaths = async () => {
  const localeResult = await getLocalizedPaths()
  const paths = Object.keys(SERVICES).map((category) => ({ params: { category } }))
  const combinedPaths = mergePaths(localeResult.paths, paths)
  return { paths: combinedPaths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ preview = null, params = {} }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const hotelInfo = (await getHotelInformation(preview)) || []
  const menusResult = await getCategoriesMock((params.category as string) || "food")
  const langCodes: string[] = await getLanguageCodes()
  if (!Array.isArray(hotelInfo) && hotelInfo && hotelInfo.content) {
    hotelInfo.content.menus = menusResult
  }
  const allLangs = ["en", ...langCodes]

  return { props: { allLangs, hotelInfo, hotelConfig, preview, params } }
}
