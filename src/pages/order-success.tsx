import { GetStaticProps } from 'next'

import LanguagesContext from '@/lib/context/LanguagesContext'

import OrderSuccess from '@/components/OrderSuccess'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

import { getHotelConfiguration, getHotelInformation, getLanguageCodes } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { HotelInfoProps } from '@/lib/types/hotelInfo'

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
}

export default function HotelInformationPage({ allLangs, hotelConfig, hotelInfo, preview }: Props) {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title="Order Success" hotelConfig={hotelConfig} />

        <OrderSuccess blok={hotelInfo?.content} blokConfig={hotelConfig?.content} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const hotelInfo = (await getHotelInformation(preview)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { allLangs, hotelInfo, hotelConfig, preview } }
}
