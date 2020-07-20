import SbEditable, { SbEditableContent } from "storyblok-react"
import { Item } from "./gridItem.styles"
import { FC, HTMLAttributes } from "react"

interface Props extends SbEditableContent {
  image?: string
}

const GridItem: FC<Props & HTMLAttributes<HTMLDivElement>> = ({ children, blok, ...props }) => {
  return (
    <SbEditable content={blok}>
      <Item {...props}>{children || (blok?.image && <img src={blok?.image} alt="" />)}</Item>
    </SbEditable>
  )
}

export default GridItem
