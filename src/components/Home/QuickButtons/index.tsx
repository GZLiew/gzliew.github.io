import QuickButton, { QuickButtonsProps } from "./Quickbutton"
import QuickButtonModal from "./QuickButtonModal"
import { QuickButtonWrapper, QuickButtonItem, Title } from "./Quickbutton/quickButtonItem.styles"

import ShowMoreIcon from "../../../assets/icons/ic-my-orders.svg"

import { QuickButtonsLayout } from "./quickButtons.styles"

import useToggle from "@/lib/hooks/useToggle"

interface Props {
  buttons?: any
}

const QuickButtons = ({ buttons }: Props) => {
  if (buttons?.length === 0) return null

  const [isActive, toggle] = useToggle(false)

  return (
    <>
      <QuickButtonsLayout>
        {!isActive &&
          buttons
            ?.slice(0, 7)
            ?.map((item: QuickButtonsProps) => <QuickButton item={item} key={item?._uid} />)}

        <QuickButtonWrapper>
          <QuickButtonItem onClick={toggle}>
            <ShowMoreIcon />
          </QuickButtonItem>
          <Title>More</Title>
        </QuickButtonWrapper>
      </QuickButtonsLayout>
      {isActive && (
        <QuickButtonModal closeModal={toggle}>
          <QuickButtonsLayout>
            {buttons?.map((item: QuickButtonsProps) => (
              <QuickButton item={item} key={item?._uid} />
            ))}
          </QuickButtonsLayout>
        </QuickButtonModal>
      )}
    </>
  )
}

export default QuickButtons
