import React from "react"
import Category from "../Category"

import { ICategory } from "@/lib/types/hotelInfo"

interface Props {
  categories: ICategory[]
}

const Categories = ({ categories }: Props) => {
  return (
    <React.Fragment>
      {categories.map((category) => (
        <Category key={category._uid} category={category} />
      ))}
    </React.Fragment>
  )
}

export default Categories
