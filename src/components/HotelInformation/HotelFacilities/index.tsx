import { AmenitiesWrapper, InnerWrapper, MoreFacilities } from "./hotelFacilities.styles"
import { IScrollingIcon } from "@/lib/types/hotelInfo"
import HotelFacilityCard from "../HotelFacilityCard"

import { Card } from "../HotelFacilityCard/hotelFacilityCard.styles"

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
        <MoreFacilities>
          <Card>
            {categoriesCount && <h5>{categoriesCount}+</h5>}
            <h6>Facilities</h6>
          </Card>
        </MoreFacilities>
      </InnerWrapper>
    </AmenitiesWrapper>
  )
}

export default HotelFacility
