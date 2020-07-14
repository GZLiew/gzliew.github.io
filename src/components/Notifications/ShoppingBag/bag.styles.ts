import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const ShoppingBagWrapper = styled.div`
  ${tw`
  rounded-full
  flex items-center justify-center
  `}
  width: 50px;
  height: 50px;
  box-shadow: 0 10px 12px -6px rgba(0, 0, 0, 0.31);
  border: solid 1px rgba(151, 151, 151, 0.22);
  background-color: #fff;
  margin-right: 15px;
  margin-left: auto;
  margin-bottom: 15px;

  & svg {
    width: 16px;
    height: 16px;
  }
`

export const ItemCount = styled.div`
  ${tw`
rounded-full
flex items-center justify-center
absolute top-0
`}
  right: 20px;
  width: 15px;
  height: 15px;
  background: ${({ theme }) =>
    `linear-gradient(101deg, ${theme.colors.pink.secondary} 17%, ${theme.colors.pink.primary} 77%)`};
  color: #fff;
  font-size: 10px;
`
