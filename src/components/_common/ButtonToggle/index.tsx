import React from "react"
import { ButtonToggleWrapper, ButtonStyled } from "./ButtonToggle.styles"

type ToggleItem = {
  id: string
  label: string
}

type Props = {
  items: ToggleItem[]
  activeItem: string
  onClick: (value: ToggleItem) => void
}

const ButtonToggle = (props: Props) => {
  const { items, activeItem, onClick } = props

  return (
    <ButtonToggleWrapper>
      {items.map(({ id, label }) => (
        <ButtonStyled
          key={id}
          value={label}
          onClick={() => onClick({ id, label })}
          size="small"
          variant={activeItem === id ? null : "flat"}
          outline={activeItem === id ? false : true}>
          {label}
        </ButtonStyled>
      ))}
    </ButtonToggleWrapper>
  )
}

export default ButtonToggle
