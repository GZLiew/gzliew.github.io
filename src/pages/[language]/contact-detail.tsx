import { GetStaticProps, GetStaticPaths } from 'next'

import getLocalizedPaths from '@/lib/utils/getLocalizedPaths'

import LanguagesContext from '@/lib/context/LanguagesContext'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import ContactDetail from '@/components/ContactDetail'

import { getHotelInformation, getHotelConfiguration, getLanguageCodes } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { HotelInfoProps } from '@/lib/types/hotelInfo'

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
}

const ContactDetailPage = ({ allLangs, hotelInfo, hotelConfig, preview }: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title="Contact Detail" hotelConfig={hotelConfig} />

        <ContactDetail blok={hotelInfo?.content} blokConfig={hotelConfig?.content} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default ContactDetailPage

export const getStaticPaths: GetStaticPaths = () => getLocalizedPaths()

export const getStaticProps: GetStaticProps = async ({ preview = null, params }) => {
  const hotelInfo = (await getHotelInformation(preview, params?.language as string)) || []
  const hotelConfig = (await getHotelConfiguration(preview, params?.language as string)) || []

  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { params, allLangs, hotelInfo, hotelConfig, preview } }
}
