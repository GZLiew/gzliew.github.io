import xw from "xwind"
import styled from "@emotion/styled"
import Section from "@/components/_common/Section"
import Accordion from "@/components/_common/Accordion"
import RadioButtons from "@/components/_common/RadioButtons"
import ButtonToggle from "@/components/_common/ButtonToggle"

export const ChoiceSection = styled(Section)`
  ${xw`py-8 px-4`}

  &:last-of-type {
    border-bottom: 3px solid
      ${({ theme }) => (theme?.mode === "light" ? theme?.colors?.primary : theme?.colors?.secondary)};
  }
`

export const AccordionStyled = styled(Accordion)`
  ${xw`px-4`}
`

export const RadioButtonsStyled = styled(RadioButtons)`
  ${xw`py-4`}
`

export const ButtonToggleStyled = styled(ButtonToggle)`
  ${xw`p-4`}
`
