import SbEditable, { SbEditableContent } from "storyblok-react"
import { Item } from "./gridItem.styles"
import { FC, HTMLAttributes } from "react"
import { IPhotoFile } from "@/lib/types/hotelInfo"

interface Props {
  photo: IPhotoFile
}

const GridItem: FC<Props & HTMLAttributes<HTMLDivElement>> = ({ children, photo, ...props }) => {
  return (
    <SbEditable content={photo}>
      <Item {...props}>{photo?.image && <img src={photo?.image} alt="" />}</Item>
    </SbEditable>
  )
}

export default GridItem
