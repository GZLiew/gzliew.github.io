import React, { ReactNode } from 'react'

import Down from '@/assets/icons/Down'

import { Wrapper } from './HeaderTitle.styles'

type WrapperProps = React.ComponentProps<typeof Wrapper>

type Props = {
  label: ReactNode
  clickable?: boolean
}

const HeaderTitle = ({ label, clickable, onClick, ...wrapperProps }: Props & WrapperProps) => {
  return (
    <Wrapper disabled={!clickable} onClick={clickable ? onClick : undefined} {...wrapperProps}>
      {label}
      {clickable && <Down fill="currentColor" />}
    </Wrapper>
  )
}

export default HeaderTitle
