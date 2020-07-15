import React from "react"
import BagIcon from "../../../assets/icons/ic-shopping-bag.svg"

import { ShoppingBagWrapper, ItemCount } from "./bag.styles"

interface Props {
  itemCount?: number
}

const ShoppingBag = ({ itemCount = 4 }: Props) => {
  return (
    <ShoppingBagWrapper>
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
      <BagIcon fill="currentColor" />
    </ShoppingBagWrapper>
  )
}

export default ShoppingBag
