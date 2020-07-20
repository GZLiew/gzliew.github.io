import { SbEditableContent } from "storyblok-react"

export interface HotelInfoProps {
  id: number
  content: HotelInfoContent
}

interface HotelInfoContent {
  welcome_text: string
  location: IHotelLocation[]
  hotel_rating: IHotelRating[]
  scrolling_icons: IScrollingIcon[]
  categories: ICategory[]
}

export interface IHotelLocation extends SbEditableContent {
  city: string
  lat: string
  lng: string
}

export interface IHotelRating extends SbEditableContent {
  of: string
  star_number: string
}

export interface IScrollingIcon extends SbEditableContent {
  icon: IIconAsset
  name: string
}

export interface IIconAsset {
  alt?: string
  copyright?: any
  fieldtype?: "asset"
  filename?: string
  focus?: any
  id?: string
  name: string
  title?: string
}

export interface ICategory extends SbEditableContent {
  title?: string
  description?: string
  sub_sections?: ICategorySubsection[]
}

export interface ICategorySubsection extends SbEditableContent {
  title?: string
  description?: string
  icon: IIconAsset
}
