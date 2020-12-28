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
  primaryColor?: PrimaryColor
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

export type PrimaryColor = 'red' | 'black' | 'green' | 'blue' | 'brown' | 'pink' | 'yellow' | 'purple'
