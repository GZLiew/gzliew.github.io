import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const WidgetContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  padding-bottom: 26px;
  background: ${({ theme }) => theme.colors.widget.background};
  border-radius: 21px;
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.text.primary};
  ${tw`font-medium`}
  margin-bottom: 17px;
`

export const CityLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.alternate};
  font-size: 12px;
`

export const InfoContainer = styled.div`
  ${tw`flex items-center`}
`

export const WeatherInfo = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: 22px;
  p {
    & span {
      ${tw`font-light`}
      font-size: 24px;
    }
    font-size: 14px;
  }
`
