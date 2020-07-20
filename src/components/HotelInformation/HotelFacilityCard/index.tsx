import { Card, Icon } from "./hotelFacilityCard.styles"

import { IStoryblok_IconAsset } from "@/lib/types/storyblok"

interface Props {
  icon?: IStoryblok_IconAsset
  cardName: string
  remainingNumber?: string | number
}

const HotelFacilityCard: React.FC<Props> = ({ icon, remainingNumber, cardName, ...props }) => {
  const formattedName = cardName.split(/^([\S]+)/g).map((w, i) => <span key={`${w}-${i}`}>{w}</span>)

  return (
    <Card {...props}>
      {icon && <Icon src={icon?.filename} alt={icon?.alt} title={icon?.title} />}
      {remainingNumber && <h5>{remainingNumber}+</h5>}
      <h6>{formattedName}</h6>
    </Card>
  )
}

export default HotelFacilityCard
