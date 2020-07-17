export interface HotelInfoProps {
  id: number
  content: HotelInfoContent
}

interface HotelInfoContent {
  welcome_text: string
  location: IHotelLocation[]
  hotel_rating: IHotelRating[]
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
  _uid: string
}
