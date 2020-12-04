import { SbEditableContent } from "storyblok-react"
import { Richtext } from "storyblok-js-client"

import { IHotelLocation, IHotelPhoto, IHotelRating, IScrollingIcon } from "./hotelInfo"

export interface IMenu extends SbEditableContent {
  title: string
  description?: string
  slug: string
  subsections?: IMenuSubsection[]
}

export type Choice<T = any> = SbEditableContent & {
  title: string
  secondaryTitle?: string
  type?: "radio" | "toggle" | "quantity"
  options: T[]
}

export type RoomServiceItem = IMenuSubsection

export interface HotelInfoContent extends SbEditableContent {
  welcomeText: string
  location: IHotelLocation[]
  hotelRating: IHotelRating[]
  scrollingIcons: IScrollingIcon[]
  menus: IMenu[]
  roomServiceItem: RoomServiceItem
  hotelPhotos: IHotelPhoto[]
  aboutSection: Richtext
  review: Richtext
  missingInformation: Richtext
}

export interface IMenuSubsection extends SbEditableContent {
  title?: string
  description?: Richtext
  choices?: Choice[]
  image?: { name: string; filename: string }
  price?: number
}

export interface HotelInfoProps {
  id?: number
  content: HotelInfoContent
}
