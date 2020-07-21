import { AmenitiesWrapper, InnerWrapper, MoreFacilities } from "./hotelFacilities.styles"
import { IScrollingIcon } from "@/lib/types/hotelInfo"
import HotelFacilityCard from "../HotelFacilityCard"

interface Props {
  amenities: Array<IScrollingIcon>
  categoriesCount: number
}

const HotelFacility = ({ amenities, categoriesCount }: Props) => {
  return (
    <AmenitiesWrapper>
      <InnerWrapper>
        {amenities?.map((amenity) => (
          <HotelFacilityCard key={amenity?._uid} blok={amenity} />
        ))}
        <MoreFacilities remainingNumber={categoriesCount} customName="Facilities" />
      </InnerWrapper>
    </AmenitiesWrapper>
  )
}

export default HotelFacility
