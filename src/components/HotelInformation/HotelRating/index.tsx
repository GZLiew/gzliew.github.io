import { useTheme } from '@emotion/react'
import SbEditable from 'storyblok-react'
import Ratings from 'react-ratings-declarative'

import { RatingWrapper, RatingText } from './hotelRating.styles'

import { IHotelRating } from '@/lib/types/hotelInfo'

interface Props {
  rating: IHotelRating
}

const HotelRating = ({ rating }: Props) => {
  const theme = useTheme()
  const totalStars = parseInt(rating.of)
  const ratedStars = parseFloat(rating.starNumber)

  return (
    <SbEditable content={rating}>
      <RatingWrapper>
        <Ratings
          rating={ratedStars}
          svgIconPaths="M7.9 3.471c.06.131.183.223.325.245l3.408.522c.347.053.49.478.244.73L9.384 7.53a.434.434 0 00-.117.372l.585 3.594a.432.432 0 01-.636.449L6.21 10.278a.431.431 0 00-.418 0l-3.007 1.667a.432.432 0 01-.636-.449l.585-3.594a.434.434 0 00-.117-.372L.123 4.968a.433.433 0 01.244-.73l3.408-.522A.432.432 0 004.1 3.47L5.61.25a.432.432 0 01.782 0L7.9 3.471z"
          svgIconViewBoxes="0 0 12 12"
          widgetDimensions="12px"
          widgetSpacings="1.5px"
          widgetEmptyColors={theme.colors.ratings.empty}
          widgetRatedColors={theme.colors.ratings.full}>
          {Array.from(Array(totalStars).keys()).map((n) => (
            <Ratings.Widget key={`rating-widget-${n}`} />
          ))}
        </Ratings>
        <RatingText>
          {ratedStars}/<span>{totalStars}</span>
        </RatingText>
      </RatingWrapper>
    </SbEditable>
  )
}

export default HotelRating
