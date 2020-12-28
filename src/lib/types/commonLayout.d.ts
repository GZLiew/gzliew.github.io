import { SbEditableContent } from 'storyblok-react'
import { IStoryblok_Link } from './storyblok'

export interface ICommonLayout extends SbEditableContent {
  primaryWelcomeText?: string
  secondaryWelcomeText?: string
  navigation?: ILayoutNavigation[]
  links?: ILayoutNavigationLink[]
}

export interface ILayoutNavigation extends SbEditableContent {
  links?: ILayoutNavigationLink[]
}

export interface ILayoutNavigationLink extends SbEditableContent {
  url?: IStoryblok_Link
  iconName?: string
  title?: string
}
