import LanguageSwitcher from "../LanguageSwitcher"

import { DetailsWrapper, GuestInfo } from "./guestDetails.styles"

import { HotelLogo } from "@/lib/types/hotelConfig"

interface Props {
  guestPhoto: HotelLogo
  name?: string
  roomNumber?: number
  guestNumber?: number
}

const GuestDetails = ({ guestPhoto, name = "Alex Keenan", roomNumber = 206, guestNumber = 4 }: Props) => {
  return (
    <DetailsWrapper>
      <img src={guestPhoto?.filename} title={guestPhoto?.name} />
      <GuestInfo>
        <h4>{name}</h4>
        <p>Room number: {roomNumber}</p>
        <p>Number of guests: {guestNumber}</p>
      </GuestInfo>

      <LanguageSwitcher />
    </DetailsWrapper>
  )
}

export default GuestDetails
