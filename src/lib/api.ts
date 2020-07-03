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
