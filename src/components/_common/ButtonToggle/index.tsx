import React from "react"
import { ButtonToggleWrapper, ButtonStyled } from "./ButtonToggle.styles"

type ButtonToggleWrapperProps = React.ComponentProps<typeof ButtonToggleWrapper>

export type ToggleItem = {
  id: string
  label: string
}

type Props = {
  items: ToggleItem[]
  activeItem: string
  onClick: (value: ToggleItem) => void
  round?: boolean
}

const ButtonToggle = (props: ButtonToggleWrapperProps & Props) => {
  const { items, activeItem, onClick, round, ...wrapperProps } = props

  return (
    <ButtonToggleWrapper {...wrapperProps}>
      {items.map(({ id, label }) => (
        <ButtonStyled
          key={id}
          value={label}
          onClick={() => onClick({ id, label })}
          size="small"
          variant={activeItem === id ? null : "flat"}
          outline={activeItem === id ? false : true}
          round={round}>
          {label}
        </ButtonStyled>
      ))}
    </ButtonToggleWrapper>
  )
}

export default ButtonToggle
