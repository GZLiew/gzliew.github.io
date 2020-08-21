import { useState } from "react"

import TabsHeightContext from "@/lib/context/TabsHeightContext"

import Category from "../Category"
import CategoryTabs from "../CategoryTabs"

import { ICategory } from "@/lib/types/hotelInfo"

interface Props {
  categories: ICategory[]
}

const Categories = ({ categories }: Props) => {
  const [tabsHeight, setTabsHeight] = useState(0)

  return (
    <TabsHeightContext.Provider value={tabsHeight}>
      <CategoryTabs categories={categories} setTabsHeight={setTabsHeight} />
      {categories.map((category) => (
        <Category key={category?._uid} category={category} />
      ))}
    </TabsHeightContext.Provider>
  )
}

export default Categories
