import React from 'react'
import { Wrapper } from './HeaderTitle.styles'
import ChevronDownSvg from '../../../assets/icons/chevron-down.svg'

type WrapperProps = React.ComponentProps<typeof Wrapper>

type Props = {
  label: string
  clickable?: boolean
}

const HeaderTitle = ({ label, clickable, onClick, ...wrapperProps }: Props & WrapperProps) => {
  return (
    <Wrapper disabled={!clickable} onClick={clickable ? onClick : undefined} {...wrapperProps}>
      {label}
      {clickable && <ChevronDownSvg />}
    </Wrapper>
  )
}

export default HeaderTitle
