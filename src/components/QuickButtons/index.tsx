import React from "react"

import QuickButton, { QuickButtonsProps } from "./Quickbutton"
import QuickButtonModal from "./QuickButtonModal"
import { QuickButtonWrapper, QuickButtonItem } from "./Quickbutton/styles"

import { QuickButtonsLayout } from "./styles"

import useToggle from "@/lib/hooks/useToggle"

interface Props {
  buttons?: []
}

const QuickButtons = ({ buttons }: Props) => {
  if (buttons.length === 0) return null

  const [value, toggle] = useToggle(false)

  return (
    <>
      <QuickButtonsLayout>
        {buttons.map((item: QuickButtonsProps) => (
          <QuickButton item={item} key={item?._uid} />
        ))}
        <QuickButtonWrapper>
          <QuickButtonItem onClick={toggle}>
            <img src="icons/ic-my-orders.svg" alt="more" />
          </QuickButtonItem>
        </QuickButtonWrapper>
      </QuickButtonsLayout>
      {value && <QuickButtonModal closeModal={toggle} isActive={value} />}
    </>
  )
}

export default QuickButtons
