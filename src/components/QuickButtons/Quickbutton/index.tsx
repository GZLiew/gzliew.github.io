import { QuickButtonWrapper, QuickButtonItem, Title } from "./quickbutton.styles"

interface Props {
  item: QuickButtonsProps
}

export interface QuickButtonsProps {
  _uid: string
  text: string
  icon: iconProps
  background_color: string
}

interface iconProps {
  filename: string
}

const QuickButton = ({ item }: Props) => {
  return (
    <QuickButtonWrapper>
      <QuickButtonItem bg={item?.background_color}>
        <img src={item?.icon?.filename} alt={item?.text} />
      </QuickButtonItem>
      <Title>{item?.text}</Title>
    </QuickButtonWrapper>
  )
}

export default QuickButton
