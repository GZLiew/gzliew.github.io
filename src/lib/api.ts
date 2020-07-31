import { fetchAPI } from "@/lib/utils/fetchAPI"
import slugify from "@sindresorhus/slugify"

import { HotelInfoProps } from "./types/hotelInfo"
import { HotelConfigProps } from "./types/hotelConfig"

export async function getHotelConfiguration(preview): Promise<HotelConfigProps> {
  const data = await fetchAPI(
    `
    {
      HotelconfigurationItem(id: "hotel-configuration") {
      id
      content {
        hotelLogo {
          name
          filename
        }
        hotelName
        primaryColor
        secondaryColor
        theme
      }
    }
  }
  `,
    { preview }
  )
  return data?.HotelconfigurationItem
}

export async function getHomeData(preview) {
  const data = await fetchAPI(
    `
    {
      HomeItem(id: "home") {
      id
      content {
        _editable
        _uid
        component
        modules
        primaryWelcomeText
        quickButtons
        secondaryWelcomeText
      }
    }
  }
  `,
    { preview }
  )
  return data?.HomeItem?.content
}

export async function getHotelInformation(preview): Promise<HotelInfoProps> {
  const data: { HotelinformationItem: HotelInfoProps } = await fetchAPI(
    `
   {
    HotelinformationItem(id: "hotel-information") {
      content {
        welcomeText
        location
        hotelRating
        component
        _uid
        _editable
        scrollingIcons
        categories
        hotelPhotos
        aboutSection
        review
        missingInformation
      }
    }
   }
  `,
    { preview }
  )

  const { categories, ...content } = data?.HotelinformationItem?.content

  const categoriesWithSlugs = categories.map((category) => ({
    slug: slugify(category.title),
    ...category
  }))

  return { content: { categories: categoriesWithSlugs, ...content } }
}

export async function getHotelGlobalNavigation(preview) {
  const data = await fetchAPI(
    `
    {
      CommonlayoutItem(id: "layout") {
        content {
          navigation
          component
          _uid
          _editable
        }
      }
    }
  `,
    { preview }
  )
  return data?.CommonlayoutItem?.content
}
