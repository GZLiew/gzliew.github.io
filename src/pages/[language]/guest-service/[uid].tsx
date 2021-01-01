import { GetStaticProps, GetStaticPaths } from 'next'

import LanguagesContext from '@/lib/context/LanguagesContext'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

import { getGuestService, getHotelConfiguration, getLanguageCodes } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { GuestService, GuestServiceProps } from '@/lib/types/guestService'
import getLocalizedPaths from '@/lib/utils/getLocalizedPaths'
import GuestServiceItem from '@/components/GuestServiceItem'
import { mergePaths } from '@/lib/utils/mergePaths'

type Params = {
  language: string
  category: string
}

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  guestServiceProps?: GuestServiceProps
  guestServiceItem?: GuestService
  preview?: boolean
  params?: Params
}

const GuestServiceItemPage = ({
  allLangs,
  guestServiceItem,
  hotelConfig,
  preview,
  guestServiceProps
}: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title="Room Services" hotelConfig={hotelConfig} />
        <GuestServiceItem
          blok={guestServiceItem}
          guestServiceProps={guestServiceProps}
          blokConfig={hotelConfig?.content}
          preview={preview}
        />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default GuestServiceItemPage

export const getStaticPaths: GetStaticPaths = async () => {
  const localeResult = await getLocalizedPaths()
  const combinedPaths = mergePaths(localeResult.paths, [{ params: { uid: 'mock' } }])
  return { paths: combinedPaths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ preview = null, params }) => {
  const hotelConfig = (await getHotelConfiguration(preview, params?.language as string)) || []
  const guestService: GuestServiceProps = (await getGuestService(preview, params?.language as string)) || []
  const langCodes: string[] = await getLanguageCodes()
  let guestServiceItem = {}
  if (guestService?.content?.services && Array.isArray(guestService?.content?.services)) {
    guestServiceItem = guestService?.content?.services.find((x) => x._uid === params.uid) || null
  }
  const allLangs = ['en', ...langCodes]

  return { props: { allLangs, hotelConfig, guestServiceItem, guestServiceProps: guestService, preview } }
}
