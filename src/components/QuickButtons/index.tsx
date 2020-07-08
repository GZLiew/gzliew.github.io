import QuickButton, { QuickButtonsProps } from "./Quickbutton"
import QuickButtonModal from "./QuickButtonModal"
import { QuickButtonWrapper, QuickButtonItem, Title } from "./Quickbutton/styles"

import { QuickButtonsLayout } from "./styles"

import useToggle from "@/lib/hooks/useToggle"

interface Props {
  buttons?: []
}

const QuickButtons = ({ buttons }: Props) => {
  if (buttons.length === 0) return null

  const [isActive, toggle] = useToggle(false)

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
          <Title>More</Title>
        </QuickButtonWrapper>
      </QuickButtonsLayout>
      {isActive && (
        <QuickButtonModal closeModal={toggle} isActive={isActive}>
          <QuickButtonsLayout>
            {buttons.map((item: QuickButtonsProps) => (
              <QuickButton item={item} key={item?._uid} />
            ))}
          </QuickButtonsLayout>
        </QuickButtonModal>
      )}
    </>
  )
}

export default QuickButtons
