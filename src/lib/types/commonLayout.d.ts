import { SbEditableContent } from "storyblok-react"
import { IStoryblok_Link, IStoryblok_IconAsset } from "./storyblok"

export interface ICommonLayout extends SbEditableContent {
  navigation?: ILayoutNavigation[]
}

export interface ILayoutNavigation extends SbEditableContent {
  links?: ILayoutNavigationLink[]
}

export interface ILayoutNavigationLink extends SbEditableContent {
  url?: IStoryblok_Link
  icon?: IStoryblok_IconAsset
  title?: string
}
