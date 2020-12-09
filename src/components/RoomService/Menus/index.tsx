import StickyTabs from '@/components/_common/StickyTabs'
import { useHeaderHeight } from '@/components/Providers/HeaderHeightProvider'
import { IMenu } from '@/lib/types/roomService'

import Menu from '../Menu'

interface Props {
  menus: IMenu[]
  category: string
}

const Menus = ({ menus, category }: Props) => {
  const { headerHeight } = useHeaderHeight()

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
