import { SbEditableContent } from 'storyblok-react'

export interface HotelConfigProps {
  id: number
  lang: 'en' | 'fr' | 'de' | 'jp' | 'cn' | 'default'
  content: HotelConfigContent
}

export interface HotelConfigContent extends SbEditableContent {
  hotelLogo: HotelLogo
  hotelLogoDark: HotelLogo
  hotelName: string
  brandColor?: BrandColor
  timezone?: Timezone
  theme: string
  seoDescription: string
  seoBannerImage: {
    filename: string
  }
}

export interface HotelLogo {
  name: string
  filename: string
}

export type Timezone = {
  _uid?: string
  plugin?: string
  selectedTimezone?: string
}

export type BrandColor = {
  uid?: string
  plugin?: string
  primary?: string
  secondary?: string
}

export type PrimaryColor = 'red' | 'black' | 'green' | 'blue' | 'brown' | 'pink' | 'yellow' | 'purple'
