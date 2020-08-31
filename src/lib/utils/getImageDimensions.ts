import fetch, { Response } from "node-fetch"
import { imageSize } from "image-size"
import { createWriteStream, existsSync, unlink, mkdirSync } from "fs"
import { basename, extname, resolve } from "path"
import { promisify } from "util"
import { v4 as uuidv4 } from "uuid"

const imageSizePromise = promisify(imageSize)

const imageTempPath = (slug: string) => resolve(`.tmp/tap/${slug}.jpg`)

// extract basename of a path. Example: https://foobar.com/we/myfile.jpg => myfile
const extractImageSlug = (imageURL: string): string => {
  const prefix = uuidv4()
  return `${prefix}${basename(imageURL, extname(imageURL))}`
}

// create tap folder inside /tmp
const createTempSubdir = () => {
  if (!existsSync(resolve(".tmp/tap/"))) {
    mkdirSync(resolve(".tmp/tap/"), { recursive: true })
  }
}

const removeTemporaryImage = (slug) =>
  new Promise((resolve, reject) => {
    if (existsSync(imageTempPath(slug))) {
      unlink(imageTempPath(slug), (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    }
  })

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
    await removeTemporaryImage(slug)

    return {
      image: imageURL,
      dimensions
    }
  } catch (error) {
    console.error(error)
  }
}

export default getImageDimensions
