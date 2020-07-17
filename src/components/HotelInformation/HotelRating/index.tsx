import Ratings from "react-ratings-declarative"

import { RatingWrapper, RatingText } from "./hotelRating.styles"

import { IHotelRating } from "@/lib/types/hotelInfo"

interface Props {
  rating: IHotelRating
}

const HotelRating = ({ rating }: Props) => {
  const totalStars = parseInt(rating.of)
  const ratedStars = parseFloat(rating.star_number)

  return (
    <RatingWrapper>
      <Ratings
        rating={ratedStars}
        widgetDimensions="12px"
        widgetSpacings="1.5px"
        widgetEmptyColors="#434a50"
        widgetRatedColors="#f7b500">
        {Array.from(Array(totalStars).keys()).map((n) => (
          <Ratings.Widget key={`rating-widget-${n}`} />
        ))}
      </Ratings>
      <RatingText>
        {ratedStars}/<span>{totalStars}</span>
      </RatingText>
    </RatingWrapper>
  )
}

export default HotelRating
