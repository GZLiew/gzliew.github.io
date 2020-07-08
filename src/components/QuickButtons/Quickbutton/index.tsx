import React from "react"
import { QuickButtonWrapper, QuickButtonItem, Title } from "./styles"

interface Props {
  item: QuickButtonsProps
}

export interface QuickButtonsProps {
  _uid: string
  text: string
  icon: iconProps
}

interface iconProps {
  filename: string
}

const QuickButton = ({ item }: Props) => {
  return (
    <QuickButtonWrapper>
      <QuickButtonItem>
        <img src={item?.icon?.filename} alt={item?.text} />
      </QuickButtonItem>
      <Title>{item?.text}</Title>
    </QuickButtonWrapper>
  )
}

export default QuickButton
