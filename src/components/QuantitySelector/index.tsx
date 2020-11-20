import usePrevious from "@/lib/hooks/usePrevious"
import { useTheme } from "@emotion/react"
import { ReactChild, useState, useEffect } from "react"

import { ColumnWrapper, SelectorWrapper } from "./QuantitySelector.styles"

interface Props {
  value: number
  maxValue?: number
  minValue?: number
  onIncrement: (val: number) => void
  onDecrement: (val: number) => void
  size: "small" | "large"
  children?: ReactChild
  disabled?: boolean
}

const QuantitySelector = ({
  value: initialValue = 0,
  maxValue = 100,
  minValue = 0,
  onIncrement,
  onDecrement,
  size = "small",
  disabled
}: Props) => {
  const { colors } = useTheme()
  const [value, setValue] = useState(initialValue)

  const prevValue = usePrevious(value)

  useEffect(() => {
    if (value > prevValue) {
      onIncrement(value)
    }
    if (value < prevValue) {
      onDecrement(value)
    }
  }, [value, onIncrement, onDecrement])

  const increment = () => {
    if (disabled) return
    setValue((prevState) => {
      if (prevState === maxValue) return prevState
      return prevState + 1
    })
  }

  const decrement = () => {
    if (disabled) return
    setValue((prevState) => {
      const newState = prevState - 1
      if (newState >= 0 && newState >= minValue) {
        return newState
      }
      return prevState
    })
  }

  return (
    <SelectorWrapper size={size} disabled={disabled}>
      <ColumnWrapper hover onClick={decrement}>
        -
      </ColumnWrapper>
      <ColumnWrapper bgColor={disabled ? colors.gray : colors.pink.primary}>{value}</ColumnWrapper>
      <ColumnWrapper hover onClick={increment}>
        +
      </ColumnWrapper>
    </SelectorWrapper>
  )
}

export default QuantitySelector
