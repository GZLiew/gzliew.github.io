import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const WidgetContainer = styled.div`
  ${tw`
    mt-10
    mb-12
  `}
  padding: 20px;
  background: ${({ theme }) => theme.colors.widget.background};
  border-radius: 21px;
`
export const RoomInfoWrapper = styled.div`
  ${tw`
    flex 
  `}
  margin-bottom: 20px;
  justify-content: space-evenly;
`
export const InfoWrapper = styled.div`
  ${tw`
    flex flex-col
  `}
  padding-right: 37px;
`
export const DateLabel = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  ${tw`
    font-medium
  `}
`
export const NightWrapper = styled.div`
  ${tw`
    relative
    flex flex-col justify-center items-center
  `}
  padding-right: 30px;

  &:before {
    content: "";
    position: absolute;
    width: 1px;
    height: 28px;
    right: 8px;
    opacity: 0.23;
    background: ${({ theme }) => theme.colors.separator};
  }

  & span {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 15px;
  }
`
export const InfoLabel = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.text.alternate};
`
