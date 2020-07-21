import { IStoryblok_IconAsset, IStoryblok_Link } from "./storyblok"
import { SbEditableContent } from "storyblok-react"

export interface HomeContent extends SbEditableContent {
  primary_welcome_text?: string
  secondary_welcome_text?: string
  quick_buttons?: QuickButton[]
}

export interface QuickButton extends SbEditableContent {
  text?: string
  icon?: IStoryblok_IconAsset
  link?: IStoryblok_Link
  background_color?: string
}
