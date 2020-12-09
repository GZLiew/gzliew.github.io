import React, { useState } from "react"

import { Choice as ChoiceProp } from "@/lib/types/roomService"

import { LabelWrapper, RowWrapper, SecondaryTitle } from "./QuantityChoice.styles"
import Button from "@/components/_common/Button"
import QuantitySelector from "@/components/_common/QuantitySelector"

type Props = {
  choice: ChoiceProp
}

const QuantityChoice = ({ choice }: Props) => {
  const [quantity, setQuantity] = useState(0)
  return (
    <RowWrapper>
      <LabelWrapper>
        {choice.title}
        <SecondaryTitle>- {choice.secondaryTitle}</SecondaryTitle>
      </LabelWrapper>
      {quantity ? (
        <QuantitySelector
          value={quantity}
          onIncrement={() => setQuantity((prev) => prev + 1)}
          onDecrement={() => setQuantity((prev) => prev - 1)}
          size="small"
        />
      ) : (
        <Button raised={false} outline size="small" variant="flat" onClick={() => setQuantity(1)}>
          Add
        </Button>
      )}
    </RowWrapper>
  )
}

export default QuantityChoice
