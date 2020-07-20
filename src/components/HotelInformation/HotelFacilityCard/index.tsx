import { IIconAsset } from "@/lib/types/hotelInfo"
import { Card, Icon } from "./hotelFacilityCard.styles"

interface Props {
  icon?: IIconAsset
  cardName: string
  remainingNumber?: string | number
}

const HotelFacilityCard: React.FC<Props> = ({ icon, remainingNumber, cardName, ...props }) => {
  const formattedName = cardName.split(/^([\S]+)/g).map((w,i) => <span key={`${w}-${i}`}>{w}</span>)

  return (
    <Card {...props}>
      {icon && <Icon src={icon?.filename} alt={icon?.alt} title={icon?.title} />}
      {remainingNumber && <h5>{remainingNumber}+</h5>}
      <h6>{formattedName}</h6>
    </Card>
  )
}

export default HotelFacilityCard
