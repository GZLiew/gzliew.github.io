import { AmenitiesWrapper, InnerWrapper, MoreFacilities } from './hotelFacilities.styles'
import HotelFacilityCard from '../HotelFacilityCard'
import { Card } from '../HotelFacilityCard/hotelFacilityCard.styles'

import { IScrollingIcon } from '@/lib/types/hotelInfo'

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
        <MoreFacilities href="#facilities">
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
