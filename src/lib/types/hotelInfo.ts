import { SbEditableContent } from "storyblok-react"
import { IStoryblok_IconAsset } from "./storyblok"
import { Richtext } from "storyblok-js-client"

export interface HotelInfoProps {
  id?: number
  content: HotelInfoContent
}

export interface HotelInfoContent extends SbEditableContent {
  welcomeText: string
  location: IHotelLocation[]
  hotelRating: IHotelRating[]
  scrollingIcons: IScrollingIcon[]
  categories: ICategory[]
  hotelPhotos: IHotelPhoto[]
  aboutSection: Richtext
}

export interface IHotelLocation extends SbEditableContent {
  city: string
  lat: string
  lng: string
}

export interface IHotelRating extends SbEditableContent {
  of: string
  starNumber: string
}

export interface IScrollingIcon extends SbEditableContent {
  iconName: string
  name: string
}

export interface ICategory extends SbEditableContent {
  title?: string
  description?: string
  subsections?: ICategorySubsection[]
}

export interface ICategorySubsection extends SbEditableContent {
  title?: string
  description?: Richtext
  icon?: IStoryblok_IconAsset
}

export interface IHotelPhoto extends SbEditableContent {
  photos?: IPhotoFile[]
}

export interface IPhotoFile extends SbEditableContent {
  image?: string
}
