import { SbEditableContent } from "storyblok-react"

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
}

export interface HotelLogo {
  name: string
  filename: string
}
