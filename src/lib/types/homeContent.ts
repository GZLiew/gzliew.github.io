import { IStoryblok_IconAsset, IStoryblok_Link } from "./storyblok"
import { SbEditableContent } from "storyblok-react"

export interface HomeContent extends SbEditableContent {
  primaryWelcomeText?: string
  secondaryWelcomeText?: string
  quickButtons?: IQuickButton[]
}

export interface IQuickButton extends SbEditableContent {
  text?: string
  iconName?: string
  link?: IStoryblok_Link
  backgroundColor?: string
}
