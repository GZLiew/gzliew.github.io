import StickyTabs from '@/components/_common/StickyTabs'
import { useHeaderHeight } from '@/components/Providers/HeaderHeightProvider'
import { ICategory } from '@/lib/types/hotelInfo'

import Category from '../Category'

interface Props {
  categories: ICategory[]
}

const Categories = ({ categories }: Props) => {
  const { headerHeight } = useHeaderHeight()

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
