import { SbEditableContent } from "storyblok-react"
import { Richtext } from "storyblok-js-client"

export interface ICategory extends SbEditableContent {
  title: string
  description?: string
  slug: string
  subsections?: ICategorySubsection[]
}

export interface ICategorySubsection extends SbEditableContent {
  title?: string
  description?: Richtext
  imageUrl?: string
  price?: number
}
