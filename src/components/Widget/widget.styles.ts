import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const WidgetContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.widget.background};
  border-radius: 21px;
`
