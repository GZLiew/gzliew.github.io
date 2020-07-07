import { fetchAPI } from "@/lib/utils/fetchAPI"

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
        primary_welcome_text
        secondary_welcome_text
      }
    }
  }
  `,
    { preview }
  )
  return data?.HomeItem
}

export async function getHotelInformation(preview) {
  const data = await fetchAPI(
    `
   {
    HotelinformationItem(id: "hotel-information") {
      content {
        welcome_text
      }
    }
   }
  `,
    { preview }
  )
  return data?.HotelinformationItem
}
