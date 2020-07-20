import { SbEditableContent } from "storyblok-react"

export interface HotelConfigProps {
  id: number
  content: HotelConfigContent
}

export interface HotelConfigContent extends SbEditableContent {
  hotel_logo: HotelLogo
  hotel_name: string
  primary_color: string
  secondary_color: string
  theme: string
}

export interface HotelLogo {
  name: string
  filename: string
}
