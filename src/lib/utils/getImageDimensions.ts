import fetch, { Response } from "node-fetch"
import { imageSize } from "image-size"
import { createWriteStream, existsSync, unlink, mkdirSync, rmdirSync } from "fs"
import { basename, extname } from "path"
import { promisify } from "util"

const imageSizePromise = promisify(imageSize)

const imageTempPath = (slug: string) => `/tmp/tap/${slug}.jpg`

// extract basename of a path. Example: https://foobar.com/we/myfile.jpg => myfile
const extractImageSlug = (imageURL: string): string => {
  return basename(imageURL, extname(imageURL))
}

// create tap folder inside /tmp
const createTempSubdir = () => {
  if (!existsSync("/tmp/tap")) {
    mkdirSync("/tmp/tap")
  }
}

export const removeTempSubdir = () => rmdirSync("/tmp/tap", { recursive: true })

// create a temporary image file with the fetched data
const temporaryStoreImage = (slug: string, response: Response) => {
  return new Promise((resolve, reject) => {
    const fileStream = createWriteStream(imageTempPath(slug))
    if (!response || !response.body) {
      reject("No body on fetch response")
    } else {
      response.body.pipe(fileStream)
      fileStream.on("finish", () => {
        resolve()
      })
      fileStream.on("error", (err) => {
        console.log("fs stream err")
        reject(err)
      })
    }
  })
}

const getImageDimensions = async (imageURL: string) => {
  try {
    createTempSubdir()

    const slug = extractImageSlug(imageURL)
    // get the image
    const res = await fetch(imageURL)

    await temporaryStoreImage(slug, res)
    // get temp image dimensions info
    const dimensions = await imageSizePromise(imageTempPath(slug))

    return {
      image: imageURL,
      dimensions
    }
  } catch (error) {
    console.error(error)
  }
}

export default getImageDimensions
