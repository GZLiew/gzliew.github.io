import SbEditable, { SbEditableContent } from "storyblok-react"

import { Card, Icon } from "./hotelFacilityCard.styles"

import ScrollingIcons from "@/assets/icons/ScrollingIcons"
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
        {/* TODO: Should be replace for svg component */}
        {blok?.iconName && <Icon src={ScrollingIcons[blok?.iconName]} alt={blok?.name} />}
        {remainingNumber && <h5>{remainingNumber}+</h5>}
        <h6>{formattedName}</h6>
      </Card>
    </SbEditable>
  )
}

export default HotelFacilityCard
