import { ReactChild, useState, useEffect } from "react"
import usePrevious from "@/lib/hooks/usePrevious"
import { useTheme } from "@emotion/react"

import { ColumnWrapper, SelectorWrapper } from "./QuantitySelector.styles"
import TouchableOpacity from "@/components/TouchableOpacity"

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
  const { colors, brandColors } = useTheme()
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
      <TouchableOpacity onClick={decrement}>
        <ColumnWrapper hover>-</ColumnWrapper>
      </TouchableOpacity>
      <ColumnWrapper bgColor={disabled ? colors.gray : brandColors.primary}>{value}</ColumnWrapper>
      <TouchableOpacity onClick={increment}>
        <ColumnWrapper hover>+</ColumnWrapper>
      </TouchableOpacity>
    </SelectorWrapper>
  )
}

export default QuantitySelector
