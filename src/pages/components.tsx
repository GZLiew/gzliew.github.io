import { GetStaticProps } from "next"

import LanguagesContext from "@/lib/context/LanguagesContext"
import Layout from "@/components/Layout"

import { getHotelGlobalNavigation, getLanguageCodes } from "@/lib/api"
import { HomeContent } from "@/lib/types/homeContent"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { ICommonLayout } from "@/lib/types/commonLayout"

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  homeContent?: HomeContent
  layoutNavigation?: ICommonLayout
  preview?: boolean
}

export default function Components({ allLangs, layoutNavigation, preview }: Props) {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout navLinks={layoutNavigation?.navigation} preview={preview}>
        <div>put some components here</div>
      </Layout>
    </LanguagesContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const layoutNavigation = (await getHotelGlobalNavigation(preview)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ["en", ...langCodes]

  return { props: { allLangs, layoutNavigation } }
}
