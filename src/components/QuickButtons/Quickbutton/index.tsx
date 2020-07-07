import React from "react"
import { QuickButtonWrapper } from "./styles"

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
      <img src={item?.icon?.filename} alt={item?.text} />
    </QuickButtonWrapper>
  )
}

export default QuickButton
