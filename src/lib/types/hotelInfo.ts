import { SbEditableContent } from "storyblok-react"
import { IStoryblok_IconAsset } from "./storyblok"

export interface HotelInfoProps {
  id: number
  content: HotelInfoContent
}

export interface HotelInfoContent extends SbEditableContent {
  welcome_text: string
  location: IHotelLocation[]
  hotel_rating: IHotelRating[]
  scrolling_icons: IScrollingIcon[]
  categories: ICategory[]
  hotel_photos: IHotelPhoto[]
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
  icon_name: string
  name: string
}

export interface ICategory extends SbEditableContent {
  title?: string
  description?: string
  sub_sections?: ICategorySubsection[]
}

export interface ICategorySubsection extends SbEditableContent {
  title?: string
  description?: string
  icon?: IStoryblok_IconAsset
}

export interface IHotelPhoto extends SbEditableContent {
  photos?: IPhotoFile[]
}

export interface IPhotoFile extends SbEditableContent {
  image?: string
}
