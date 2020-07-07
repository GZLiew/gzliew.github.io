export interface HotelInfoProps {
  id: number
  content: HotelInfoContent
}

interface HotelInfoContent {
  hotel_name: string
  welcome_text: string
}
