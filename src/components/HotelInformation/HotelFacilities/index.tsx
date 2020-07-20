import { AmenitiesWrapper, InnerWrapper, MoreFacilities } from "./hotelFacilities.styles"
import { IScrollingIcon } from "@/lib/types/hotelInfo"
import HotelFacilityCard from "../HotelFacilityCard"

interface Props {
  amenities: IScrollingIcon[]
  categoriesCount: number
}

const HotelFacility = ({ amenities, categoriesCount }: Props) => {
  return (
    <AmenitiesWrapper>
      <InnerWrapper>
        {amenities?.map((amenity) => (
          <HotelFacilityCard key={amenity?._uid} icon={amenity?.icon} cardName={amenity?.name} />
        ))}
        <MoreFacilities remainingNumber={categoriesCount} cardName="Facilities" />
      </InnerWrapper>
    </AmenitiesWrapper>
  )
}

export default HotelFacility
