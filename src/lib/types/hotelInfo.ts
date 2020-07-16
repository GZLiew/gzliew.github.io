export interface HotelInfoProps {
  id: number
  content: HotelInfoContent
}

interface HotelInfoContent {
  welcome_text: string
  location: IHotelLocation[]
}

export interface IHotelLocation {
  city: string
  component: string
  lat: string
  lng: string
  _uid: string
}
