import React from "react"

import CheckedIcon from "../../../assets/icons/ic-checked.svg"

import { Base, CheckMark, Label, CheckMarkHighlight, HighlightBackground } from "./CheckListItem.styles"

type Props = {
  label: string
  selected: boolean
  onClick?: () => void
}

const CheckListItem = ({ label, selected, onClick }: Props) => {
  return (
    <Base onClick={onClick} selected={selected}>
      <CheckMark selected={selected}>
        <CheckMarkHighlight selected={selected}>
          <CheckedIcon />
        </CheckMarkHighlight>
      </CheckMark>
      <Label>{label}</Label>
      <HighlightBackground selected={selected} />
    </Base>
  )
}

export default CheckListItem
