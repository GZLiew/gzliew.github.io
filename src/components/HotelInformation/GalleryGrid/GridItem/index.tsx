import { Item } from "./gridItem.styles"
import { FC, HTMLAttributes } from "react"

interface Props {
  image?: string
}

const GridItem: FC<Props & HTMLAttributes<HTMLDivElement>> = ({ children, image, ...props }) => {
  return <Item {...props}>{children || (image && <img src={image} alt="" />)}</Item>
}

export default GridItem
