import { MenuItemWrapper, MenuDetail, MenuImage } from "./menuItem.styles"
import { HotelLogo } from "@/lib/types/hotelConfig"

type MenuItemWrapperProps = React.ComponentProps<typeof MenuItemWrapper>

interface Props {
  image?: HotelLogo
  title: string
  description: string
  price: number
}

const MenuItem = (props: MenuItemWrapperProps & Props) => {
  const { title, description, price, image, ...menuWrapperProps } = props
  return (
    <MenuItemWrapper {...menuWrapperProps}>
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
