import { fetchAPI } from "@/lib/utils/fetchAPI"
import slugify from "@sindresorhus/slugify"

import { HotelInfoProps } from "./types/hotelInfo"

export async function getHotelConfiguration(preview) {
  const data = await fetchAPI(
    `
    {
      HotelconfigurationItem(id: "hotel-configuration") {
      id
      content {
        hotel_logo {
          name
          filename
        }
        hotel_name
        primary_color
        secondary_color
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
        primary_welcome_text
        quick_buttons
        secondary_welcome_text
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
        welcome_text
        location
        hotel_rating
        component
        _uid
        _editable
        scrolling_icons
        categories
        hotel_photos
        about_section
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
