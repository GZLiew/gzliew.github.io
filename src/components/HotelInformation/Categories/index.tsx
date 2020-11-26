import Category from "../Category"
import StickyTabs from "@/components/_common/StickyTabs"
import HeaderHeightContext from "@/lib/context/HeaderHeightContext"
import { ICategory } from "@/lib/types/hotelInfo"
import { useContext } from "react"

interface Props {
  categories: ICategory[]
}

const Categories = ({ categories }: Props) => {
  const headerHeight = useContext(HeaderHeightContext)

  return (
    <>
      {headerHeight && <StickyTabs items={categories} offset={headerHeight} />}
      {categories.map((category) => (
        <Category key={category.slug} category={category} />
      ))}
    </>
  )
}

export default Categories
