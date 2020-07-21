import SbEditable, { SbEditableContent } from "storyblok-react"

import { Card, Icon } from "./hotelFacilityCard.styles"

import ScrollingIcons from "@/assets/icons/ScrollingIcons"

interface Props {
  blok?: Card
  remainingNumber?: string | number
  customName?: string
}

interface Card extends SbEditableContent {
  icon_name?: string
  name?: string
}

const HotelFacilityCard: React.FC<Props> = ({ blok, remainingNumber, customName, ...props }) => {
  const name = customName || blok?.name
  const formattedName = name.split(/^([\S]+)/g).map((w, i) => <span key={`${w}-${i}`}>{w}</span>)

  return (
    <SbEditable content={blok}>
      <Card {...props}>
        {/* TODO: Should be replace for svg component */}
        {blok?.icon_name && <Icon src={ScrollingIcons[blok?.icon_name]} alt={blok?.name} />}
        {remainingNumber && <h5>{remainingNumber}+</h5>}
        <h6>{formattedName}</h6>
      </Card>
    </SbEditable>
  )
}

export default HotelFacilityCard
