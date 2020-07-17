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

interface IHotelInfoField {
  component: string
  _uid: string
}

export interface IHotelLocation extends IHotelInfoField {
  city: string
  lat: string
  lng: string
}

export interface IHotelRating extends IHotelInfoField {
  of: string
  star_number: string
}

export interface IScrollingIcon extends IHotelInfoField {
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

export interface ICategory extends IHotelInfoField {
  title?: string
  description?: string
  subsections?: ICategorySubsection[]
  _editable?: string
}

export interface ICategorySubsection extends IHotelInfoField {
  title?: string
  description?: string
  icon: IIconAsset
}
