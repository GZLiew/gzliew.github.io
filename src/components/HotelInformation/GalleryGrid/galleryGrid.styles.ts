import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

import { Item } from "./GridItem/gridItem.styles"

export const Grid = styled.div`
  ${tw`
    grid
  `}

  grid-gap: 10px;
  grid-template-columns: minmax(0, 2fr) repeat(2, minmax(0, 1fr));
  grid-template-rows: minmax(0, 2fr) minmax(0, 1fr);

  .item-1 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }

  .item-2 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  .item-3 {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  .item-4 {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }

  .item-last {
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
  }
`

export const MorePhotos = styled(Item)`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    px-1
    pt-3
    pb-2
    text-xs
    text-center
 `}
  background: ${({ theme }) =>
    `linear-gradient(134deg, ${theme?.colors?.pink?.secondary} 17%, ${theme?.colors?.pink?.primary} 77%)`};
  color: ${rgba("#fff", 0.72)};

  h5 {
    ${tw`
      text-base
      leading-none
    `}
    color: #fff;
  }

  h6 {
    font-size: 10px;
  }
`
