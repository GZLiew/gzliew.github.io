import StickyTabs from '@/components/_common/StickyTabs'
import { useHeaderHeight } from '@/lib/stores/useHeaderHeight'
import { ICategory } from '@/lib/types/hotelInfo'

import Category from '../Category'

interface Props {
  categories: ICategory[]
}

const Categories = ({ categories }: Props) => {
  const headerHeight = useHeaderHeight((state) => state.headerHeight)

  return (
    <>
      {headerHeight && <StickyTabs items={categories} offset={headerHeight} />}
      {categories.map((category) => (
        <Category key={category._uid} category={category} />
      ))}
    </>
  )
}

export default Categories
