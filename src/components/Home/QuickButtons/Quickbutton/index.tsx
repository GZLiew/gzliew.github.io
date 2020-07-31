import Link from "next/link"
import SbEditable from "storyblok-react"

import { QuickButtonWrapper, QuickButtonItem, Title } from "./quickButtonItem.styles"

import QuickIcons from "@/assets/icons/QuickIcons"

import getLink from "@/lib/utils/getLink"

import { IQuickButton } from "@/lib/types/homeContent"

interface Props {
  item: IQuickButton
}

const QuickButton = ({ item }: Props) => {
  return (
    <SbEditable content={item}>
      <Link href={getLink(item?.link)}>
        <QuickButtonWrapper>
          <QuickButtonItem bg={item?.backgroundColor}>{QuickIcons[item?.iconName]}</QuickButtonItem>
          <Title>{item?.text}</Title>
        </QuickButtonWrapper>
      </Link>
    </SbEditable>
  )
}

export default QuickButton
