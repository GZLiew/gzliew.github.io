import React from "react"
import { DetailsWrapper } from "./guestDetails.styles"
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
      <div className="details">
        <h4>{name}</h4>
        <p>Room number: {roomNumber}</p>
        <p>Number of guests: {guestNumber}</p>
      </div>
    </DetailsWrapper>
  )
}

export default GuestDetails
