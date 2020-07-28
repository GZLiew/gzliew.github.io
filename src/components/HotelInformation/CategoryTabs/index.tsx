import { useState, useRef, useEffect, useMemo, useContext } from "react"
import { throttle } from "lodash"

import Scrollspy from "react-scrollspy"

import { Tabs, Container, Tab } from "./categoryTabs.styles"
import { ICategory } from "@/lib/types/hotelInfo"
import HeaderHeightContext from "@/lib/context/HeaderHeightContext"

interface Props {
  categories: ICategory[]
  setTabsHeight: (number) => void
}

const CategoryTabs = ({ categories, setTabsHeight }: Props) => {
  const headerHeight = useContext(HeaderHeightContext)
  const headerHeightRef = useRef<number>(headerHeight)
  const ref = useRef<HTMLDivElement>(null)
  const top = useRef<number>(0)
  const [isOnTop, set] = useState(false)
  const isOnTopRef = useRef<boolean>()
  isOnTopRef.current = isOnTop

  useMemo(() => (headerHeightRef.current = headerHeight), [headerHeight])

  useEffect(() => {
    if (ref.current) {
      setTabsHeight(ref.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    top.current = ref.current.getBoundingClientRect().top + global?.window?.pageYOffset - headerHeight
  }, [])

  useEffect(() => {
    const getOffsetTop = () => {
      if (ref.current && headerHeightRef.current > 0) {
        const show = ref.current.offsetTop - global?.window?.scrollY <= headerHeightRef.current
        console.log(show)
        if (isOnTopRef.current !== show) {
          set(show)
        }
      }
    }
    global?.window?.addEventListener("scroll", throttle(getOffsetTop, 100))
    return () => {
      global?.window?.addEventListener("scroll", throttle(getOffsetTop, 100))
    }
  }, [])

  const handleUpdate = (scrolledSectionEl: HTMLElement) => {
    if (scrolledSectionEl) {
      const id = scrolledSectionEl.id

      if (ref.current) {
        const matchingTab = ref.current.querySelector<HTMLAnchorElement>(`[href='#${id}']`)

        if (matchingTab) {
          ref.current.scroll({
            left: matchingTab.offsetLeft - matchingTab.offsetWidth,
            behavior: "smooth"
          })
        }
      }
    }
  }

  return (
    <Tabs ref={ref} style={{ top: headerHeight }} isOnTop={isOnTop}>
      <Scrollspy
        items={categories.map((cat) => cat.slug)}
        currentClassName="active"
        componentTag={Container}
        offset={-(headerHeight + 50 + 10)}
        onUpdate={handleUpdate}>
        {categories.map(({ _uid, title, slug }, i) => (
          <Tab href={`#${slug}`} key={_uid}>
            <span>{title}</span>
          </Tab>
        ))}
      </Scrollspy>
    </Tabs>
  )
}

export default CategoryTabs
