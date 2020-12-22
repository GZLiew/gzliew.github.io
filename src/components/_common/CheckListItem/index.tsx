import React from 'react'

import CheckedIcon from '../../../assets/icons/ic-checked.svg'

import { Base, CheckMark, Label, CheckMarkHighlight, HighlightBackground } from './CheckListItem.styles'

type ChecklistItemBaseProps = React.ComponentProps<typeof Base>

type Props = {
  label: string
  selected: boolean
  onClick?: () => void
}

const CheckListItem = ({
  label,
  selected,
  onClick,
  ...checklistItemBaseProps
}: Props & ChecklistItemBaseProps) => {
  return (
    <Base onClick={onClick} selected={selected} {...checklistItemBaseProps}>
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
