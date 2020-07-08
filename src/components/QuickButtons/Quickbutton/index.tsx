import Link from "next/link"

import { QuickButtonWrapper, QuickButtonItem, Title } from "./quickButtonItem.styles"

interface Props {
  item: QuickButtonsProps
}

export interface QuickButtonsProps {
  _uid: string
  text: string
  icon: iconProps
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
    <Link href={`/${item?.link?.cached_url}`}>
      <QuickButtonWrapper>
        <QuickButtonItem bg={item?.background_color}>
          <img src={item?.icon?.filename} alt={item?.text} />
        </QuickButtonItem>
        <Title>{item?.text}</Title>
      </QuickButtonWrapper>
    </Link>
  )
}

export default QuickButton
