import React, { useState } from "react"

import { Choice as ChoiceProp } from "@/lib/types/roomService"
import { ToggleItem } from "@/components/_common/ButtonToggle"
import { AccordionStyled, ButtonToggleStyled } from "../Choice.styles"

type Props = {
  choice: ChoiceProp<ToggleItem>
}

const ToggleChoice = ({ choice }: Props) => {
  const [toggleVal, setToggleVal] = useState(choice.options[1].id)
  return (
    <AccordionStyled title={choice.title} secondaryTitle={choice.secondaryTitle}>
      <ButtonToggleStyled
        items={choice.options as ToggleItem[]}
        activeItem={toggleVal}
        onClick={(value) => setToggleVal(value.id)}
      />
    </AccordionStyled>
  )
}

export default ToggleChoice
