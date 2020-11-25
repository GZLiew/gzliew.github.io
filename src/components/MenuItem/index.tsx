import { MenuItemWrapper, MenuDetail, MenuImage } from "./menuItem.styles"
import { HotelLogo } from "@/lib/types/hotelConfig"

interface Props {
  image?: HotelLogo
  title: string
  description: string
  price: number
}

const MenuItem = (props: Props) => {
  const { title, description, price, image } = props
  return (
    <MenuItemWrapper>
      <MenuImage className={props.image ? "show" : "hidden"}>
        <img src={image?.filename} alt={image?.name} title={image?.name} />
      </MenuImage>
      <MenuDetail>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>${price}</p>
      </MenuDetail>
    </MenuItemWrapper>
  )
}

export default MenuItem
