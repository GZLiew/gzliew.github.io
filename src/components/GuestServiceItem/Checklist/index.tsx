import React, { useState } from 'react'

import CheckList from '@/components/_common/CheckList'
import { CheckListData, GuestService } from '@/lib/types/guestService'

import { StyledBottomSheet, SubmitButtonStyled } from '../GuestServiceItem.styles'
import { CheckListContainer, SubtitleContainer } from './Checklist.styles'

type Props = {
  blok: GuestService<CheckListData>
}

const Checklist = ({ blok }: Props) => {
  const [choices, setChoices] = useState([])

  return (
    <>
      <CheckListContainer>
        <SubtitleContainer>{blok?.data?.subtitle}</SubtitleContainer>
        <CheckList
          limit={blok?.data?.maxChecklistItems || 1}
          items={blok?.data?.items}
          onChange={(items) => setChoices(items)}
        />
      </CheckListContainer>
      <StyledBottomSheet>
        <SubmitButtonStyled size="medium" onClick={() => console.log(choices)}>
          Request
        </SubmitButtonStyled>
      </StyledBottomSheet>
    </>
  )
}

export default Checklist
