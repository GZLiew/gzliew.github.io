export interface HotelInfoProps {
  id: number
  content: HotelInfoContent
}

interface HotelInfoContent {
  welcome_text: string
  location: IHotelLocation[]
  hotel_rating: IHotelRating[]
}

export interface IHotelLocation {
  city: string
  component: string
  lat: string
  lng: string
  _uid: string
}

export interface IHotelRating {
  component: string
  of: string
  star_number: string
  _uid: string
}
