import SbEditable from "storyblok-react"
import { Grid, MorePhotos } from "./galleryGrid.styles"

import { IPhotoFile, IHotelPhoto } from "@/lib/types/hotelInfo"
import GridItem from "./GridItem"

interface Props {
  gallery: IHotelPhoto
}

const GalleryGrid = ({ gallery }: Props) => {
  const shownPhotos = gallery?.photos.slice(0, 4)

  return (
    <SbEditable content={gallery}>
      <Grid>
        {shownPhotos.map((photo, i) => (
          <GridItem key={photo._uid} photo={photo} className={`item-${i + 1}`} />
        ))}
        <MorePhotos className="item-last">
          <h5>{gallery?.photos.length - shownPhotos.length}+</h5>
          <h6>Photos</h6>
        </MorePhotos>
      </Grid>
    </SbEditable>
  )
}

export default GalleryGrid
