import SbEditable from "storyblok-react"

import { Card, IconWrapper } from "./hotelFacilityCard.styles"

import HotelInfoIcons from "@/assets/icons/HotelInfoIcons"
import { IScrollingIcon } from "@/lib/types/hotelInfo"

interface Props {
  blok?: IScrollingIcon
  remainingNumber?: string | number
  customName?: string
}

const HotelFacilityCard: React.FC<Props> = ({ blok, remainingNumber, customName, ...props }) => {
  const name = customName || blok?.name
  const formattedName = name.split(/^([\S]+)/g).map((w, i) => <span key={`${w}-${i}`}>{w}</span>)

  return (
    <SbEditable content={blok}>
      <Card {...props}>
        {blok?.iconName && <IconWrapper>{HotelInfoIcons[blok?.iconName]}</IconWrapper>}
        {remainingNumber && <h5>{remainingNumber}+</h5>}
        <h6>{formattedName}</h6>
      </Card>
    </SbEditable>
  )
}

export default HotelFacilityCard
