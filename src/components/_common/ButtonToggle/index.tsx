import React from "react"
import { ButtonToggleWrapper, ButtonStyled } from "./ButtonToggle.styles"

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

const ButtonToggle = (props: Props) => {
  const { items, activeItem, onClick, round } = props

  return (
    <ButtonToggleWrapper>
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
