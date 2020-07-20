import Link from "next/link"
import SbEditable from "storyblok-react"

import { QuickButtonWrapper, QuickButtonItem, Title } from "./quickButtonItem.styles"

import QuickIcons from "@/assets/icons/QuickIcons"

interface Props {
  item: QuickButtonsProps
}

export interface QuickButtonsProps {
  _uid: string
  component: string
  text: string
  icon_name: string
  link: LinkProps
  background_color: string
}

interface LinkProps {
  id: string
  url: string
  fieldtype: string
  cached_url: string
}

interface iconProps {
  filename: string
}

const QuickButton = ({ item }: Props) => {
  return (
    <SbEditable content={item}>
      <Link href={`/${item?.link?.cached_url}`}>
        <QuickButtonWrapper>
          <QuickButtonItem bg={item?.background_color}>{QuickIcons[item?.icon_name]}</QuickButtonItem>
          <Title>{item?.text}</Title>
        </QuickButtonWrapper>
      </Link>
    </SbEditable>
  )
}

export default QuickButton
