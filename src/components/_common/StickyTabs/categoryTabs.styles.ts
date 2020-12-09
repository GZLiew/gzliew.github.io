import xw from 'xwind'
import styled from '@emotion/styled'
import { animated } from 'react-spring'

export const Tabs = styled(animated.div)`
  ${xw`z-40 sticky flex overflow-x-hidden border-b border-solid`}
  position: -webkit-sticky;
  border-bottom-color: ${({ theme }) => theme.colors.categoryTabs.border};

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled(animated.div)`
  ${xw`container flex px-3 mx-auto`}

  @media screen and (max-width: 576px) {
    cursor: grab;
  }
`

export const Tab = styled.a<{ height: number }>`
  ${xw`px-3 text-xs`}
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.text.alternate};

  &.active {
    color: ${({ theme }) => theme?.brandColors?.primary};

    span {
      border-color: ${({ theme }) => theme?.brandColors?.primary};
    }
  }

  &:last-of-type {
    ${xw`pr-6`}
  }

  span {
    ${xw`flex border-b-2 items-center border-solid border-transparent`}

    height: ${(props) => props.height}px;
  }
`
