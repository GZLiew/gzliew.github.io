import type { IHotelLocation } from "@/lib/types/hotelInfo"
import { LocationWrapper, LocationCity, LocationLink, LocationMarker } from "./hotelLocation.styles"

interface Props {
  location: IHotelLocation
}

const HotelLocation = ({ location }: Props) => {
  return (
    <LocationWrapper>
      <LocationMarker />
      <LocationCity>{location?.city}</LocationCity>
      <LocationLink
        href={`http://google.com/maps/search/?api=1&query=${location?.lat},${location?.lng}`}
        target="_blank"
        rel="noopener noreferrer">
        View on map {">"}
      </LocationLink>
    </LocationWrapper>
  )
}

export default HotelLocation
