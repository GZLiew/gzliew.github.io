import { SbEditableContent } from "storyblok-react"
import { IStoryblok_IconAsset } from "./storyblok"

export interface HotelConfigProps {
  id: number
  content: HotelConfigContent
}

export interface HotelConfigContent extends SbEditableContent {
  hotelLogo: HotelLogo
  hotelLogoDark: HotelLogo
  hotelName: string
  primaryColor: string
  secondaryColor: string
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
