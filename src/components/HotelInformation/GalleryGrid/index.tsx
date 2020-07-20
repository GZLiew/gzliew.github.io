import { Grid, MorePhotos } from "./galleryGrid.styles"

import { IPhotoFile } from "@/lib/types/hotelInfo"
import GridItem from "./GridItem"

interface Props {
  photos: IPhotoFile[]
}

const GalleryGrid = ({ photos }: Props) => {
  const shownPhotos = photos.slice(0, 4)

  return (
    <Grid>
      {shownPhotos.map((photo, i) => (
        <GridItem key={photo._uid} image={photo.image} className={`item-${i + 1}`} />
      ))}
      <MorePhotos className="item-last">
        <h5>{photos.length - shownPhotos.length}+</h5>
        <h6>Photos</h6>
      </MorePhotos>
    </Grid>
  )
}

export default GalleryGrid
