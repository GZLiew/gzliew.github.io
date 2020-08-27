import styled from "@emotion/styled"
import { animated } from "react-spring"
import tw from "@tailwindcssinjs/macro"

export const Tabs = styled(animated.div)`
  ${tw`z-40 sticky flex overflow-x-hidden border-b border-solid`}
  position: -webkit-sticky;
  border-bottom-color: ${({ theme }) => theme.colors.categoryTabs.border};

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled(animated.div)`
  ${tw`container flex px-3 mx-auto`}

  @media screen and (max-width: 576px) {
    cursor: grab;
  }
`

export const Tab = styled.a`
  ${tw`px-3 text-xs`}
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.text.alternate};

  &.active {
    color: ${({ theme }) => theme?.colors?.[theme?.primaryColor]?.primary};

    span {
      border-color: ${({ theme }) => theme?.colors?.[theme?.primaryColor]?.primary};
    }
  }

  &:last-of-type {
    ${tw`pr-6`}
  }

  span {
    ${tw`block py-4 border-b-2 border-solid border-transparent`}
  }
`
