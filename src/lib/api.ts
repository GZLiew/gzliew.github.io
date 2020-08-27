import { fetchAPI } from "@/lib/utils/fetchAPI"
import slugify from "@sindresorhus/slugify"

import { getLocalizedSlugNode } from "./utils/getLocalizedSlug"

import { HotelInfoProps } from "./types/hotelInfo"
import { HotelConfigProps } from "./types/hotelConfig"

export async function getHotelConfiguration(preview: boolean, language?: string): Promise<HotelConfigProps> {
  const data = await fetchAPI(
    `
    query ($slug: ID!) {
      HotelconfigurationItem(id: $slug) {
      id
      content {
        hotelLogo {
          name
          filename
        }
        hotelLogoDark {
          name
          filename
        }
        hotelName
        primaryColor
        theme
        seoDescription
        seoBannerImage {
          filename
        }
      }
    }
  }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, "hotel-configuration") } }
  )
  return data?.HotelconfigurationItem
}

export async function getHomeData(preview: boolean, language?: string) {
  const data = await fetchAPI(
    `
    query ($slug: ID!) {
      HomeItem(id: $slug) {
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
    { preview, variables: { slug: getLocalizedSlugNode(language, "home") } }
  )
  return data?.HomeItem?.content
}

export async function getHotelInformation(preview: boolean, language?: string): Promise<HotelInfoProps> {
  const data: { HotelinformationItem: HotelInfoProps } = await fetchAPI(
    `
   query ($slug: ID!){
    HotelinformationItem(id: $slug) {
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
    { preview, variables: { slug: getLocalizedSlugNode(language, "hotel-information") } }
  )

  const { categories, ...content } = data?.HotelinformationItem?.content

  const categoriesWithSlugs = categories.map((category) => ({
    slug: slugify(category.title),
    ...category
  }))

  return { content: { categories: categoriesWithSlugs, ...content } }
}

export async function getHotelGlobalNavigation(preview: boolean, language?: string) {
  const data = await fetchAPI(
    `
    query ($slug: ID!){
      CommonlayoutItem(id: $slug) {
        content {
          navigation
          component
          _uid
          _editable
        }
      }
    }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, "layout") } }
  )
  return data?.CommonlayoutItem?.content
}

export async function getLanguageCodes() {
  const data = await fetchAPI(`{ Space { languageCodes } }`, {
    preview: false
  })

  return data?.Space?.languageCodes
}
