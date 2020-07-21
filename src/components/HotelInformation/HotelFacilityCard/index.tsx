import { Card, Icon } from "./hotelFacilityCard.styles"

import ScrollingIcons from "@/assets/icons/ScrollingIcons"

interface Props {
  icon?: string
  cardName: string
  remainingNumber?: string | number
}

const HotelFacilityCard: React.FC<Props> = ({ icon, remainingNumber, cardName, ...props }) => {
  const formattedName = cardName.split(/^([\S]+)/g).map((w, i) => <span key={`${w}-${i}`}>{w}</span>)

  return (
    <Card {...props}>
      {/* TODO: Should be replace for svg component */}
      {icon && <Icon src={ScrollingIcons[icon]} alt={cardName} />}
      {remainingNumber && <h5>{remainingNumber}+</h5>}
      <h6>{formattedName}</h6>
    </Card>
  )
}

export default HotelFacilityCard
