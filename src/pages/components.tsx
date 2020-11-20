import { useState } from "react"
import { GetStaticProps } from "next"

import LanguagesContext from "@/lib/context/LanguagesContext"
import Layout from "@/components/Layout"
import Accordion from "@/components/Accordion"

import { getHotelGlobalNavigation, getLanguageCodes } from "@/lib/api"
import { HomeContent } from "@/lib/types/homeContent"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { ICommonLayout } from "@/lib/types/commonLayout"
import RadioButtons from "@/components/RadioButtons"

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  homeContent?: HomeContent
  layoutNavigation?: ICommonLayout
  preview?: boolean
}

export default function Components({ allLangs, layoutNavigation, preview }: Props) {
  const [active, setActive] = useState("1")
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout navLinks={layoutNavigation?.navigation} preview={preview}>
        <Accordion title="Choice of veg starter" secondaryTitle="Required">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum odit, rem dolorum culpa
          quibusdam. Deserunt porro voluptatibus natus asperiores eum libero magnam suscipit nobis doloremque,
          nemo deleniti quasi autem aspernatur tenetur ipsa reiciendis numquam veniam amet. Excepturi
          laudantium ducimus consequatur aliquid esse, dolore ullam quas distinctio voluptas fugit quaerat.
          Laborum repudiandae iure dolore.
        </Accordion>
        <RadioButtons
          onClickRadioButton={(item) => setActive(item.id)}
          activeItem={active}
          items={[
            { id: "1", label: "Exotic Veg Thai Style" },
            { id: "2", label: "nasi Veg Style", secondaryLabel: "+$29" },
            { id: "3", label: "currey  Thai Style", secondaryLabel: "+$29" },
            { id: "4", label: "noodles Thai Style", secondaryLabel: "+$29" }
          ]}
        />
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
