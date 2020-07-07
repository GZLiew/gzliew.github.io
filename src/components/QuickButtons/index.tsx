import React from "react"

import QuickButton, { QuickButtonsProps } from "./Quickbutton"

import { QuickButtonsLayout } from "./styles"

interface Props {
  buttons?: []
}

const QuickButtons = ({ buttons }: Props) => {
  if (buttons.length === 0) return null
  return (
    <QuickButtonsLayout>
      {buttons.map((item: QuickButtonsProps) => (
        <QuickButton item={item} key={item?._uid} />
      ))}
    </QuickButtonsLayout>
  )
}

export default QuickButtons
