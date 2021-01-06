import StickyTabs from '@/components/_common/StickyTabs'
import { useHeaderHeight } from '@/lib/stores/useHeaderHeight'
import { IMenu } from '@/lib/types/roomService'

import Menu from '../Menu'

interface Props {
  menus: IMenu[]
  category: string
}

const Menus = ({ menus, category }: Props) => {
  const headerHeight = useHeaderHeight((state) => state.headerHeight)

  return (
    <>
      {headerHeight && <StickyTabs items={menus} offset={headerHeight} />}

      {menus.map((menu) => (
        <Menu key={menu.slug} menu={menu} category={category} />
      ))}
    </>
  )
}

export default Menus
