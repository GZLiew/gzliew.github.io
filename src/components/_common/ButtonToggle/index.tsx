import React, { ReactNode } from 'react'
import Button from '../Button'
import { ButtonToggleWrapper } from './ButtonToggle.styles'

type ButtonToggleWrapperProps = React.ComponentProps<typeof ButtonToggleWrapper>

export type ToggleItem = {
  id: string
  label: ReactNode
}

type Props = {
  items: ToggleItem[]
  activeItem: string
  activeBgColor?: string
  inactiveBgColor?: string
  wrapperBgColor?: string
  outlineColor?: string
  outlinePaddingX?: number
  onClick: (value: ToggleItem) => void
  round?: boolean
}

const ButtonToggle = (props: ButtonToggleWrapperProps & Props) => {
  const {
    items,
    activeItem,
    onClick,
    round,
    activeBgColor,
    inactiveBgColor,
    outlineColor,
    outlinePaddingX,
    wrapperBgColor,
    ...wrapperProps
  } = props

  return (
    <ButtonToggleWrapper {...wrapperProps}>
      {items.map(({ id, label }) => (
        <Button
          key={id}
          onClick={() => onClick({ id, label })}
          size="small"
          shouldAnimate
          raised={false}
          variant={activeItem === id ? null : 'flat'}
          outline={activeItem === id ? false : true}
          bgColor={activeItem === id ? activeBgColor : inactiveBgColor}
          outlineColor={outlineColor}
          outlinePaddingX={outlinePaddingX}
          wrapperBgColor={wrapperBgColor}
          round={round}>
          {label}
        </Button>
      ))}
    </ButtonToggleWrapper>
  )
}

export default ButtonToggle
