import { IHotelPhoto } from "../types/hotelInfo"
import getImageDimensions from "./getImageDimensions"

// get hotel photos image dimensions and return a modified IHotelPhoto[]
const processHotelPhotos = async (hotelPhotos: IHotelPhoto[]): Promise<IHotelPhoto[]> =>
  // hotelPhotos is a single object array
  // return hotePhotos[] with modified photo objects
  await Promise.all(
    hotelPhotos.map(async ({ photos, ...hotelPhoto }) => {
      // process photos with new dimensions property
      const processedPhotos = await Promise.all(
        photos.map(async (photo) => {
          // get image dimensions and append them to photo object
          const { dimensions } = await getImageDimensions(`https:${photo.image}`)
          return { dimensions, ...photo }
        })
      )
      // return original hotelPhoto object with processedPhotos
      return { photos: processedPhotos, ...hotelPhoto }
    })
  )

export default processHotelPhotos
