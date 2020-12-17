import { GetStaticProps } from 'next'

import LanguagesContext from '@/lib/context/LanguagesContext'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

import { getGuestService, getHotelConfiguration, getLanguageCodes } from '@/lib/api'
import { HotelConfigProps } from '@/lib/types/hotelConfig'
import { GuestServiceProps } from '@/lib/types/guestService'
import GuestService from '@/components/GuestService'

type Params = {
  language: string
  category: string
}

interface Props {
  allLangs: string[]
  hotelConfig?: HotelConfigProps
  guestService?: GuestServiceProps
  preview?: boolean
  params?: Params
}

const GuestServicePage = ({ allLangs, hotelConfig, guestService, preview }: Props) => {
  return (
    <LanguagesContext.Provider value={allLangs}>
      <Layout hotelConfig={hotelConfig} preview={preview}>
        <SEO title="Room Services" hotelConfig={hotelConfig} />
        <GuestService blok={guestService?.content} blokConfig={hotelConfig?.content} preview={preview} />
      </Layout>
    </LanguagesContext.Provider>
  )
}

export default GuestServicePage

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const guestService = (await getGuestService(preview)) || []
  const langCodes: string[] = await getLanguageCodes()
  const allLangs = ['en', ...langCodes]

  return { props: { allLangs, hotelConfig, guestService, preview } }
}
