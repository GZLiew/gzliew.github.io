import { useState, useRef, useEffect, useMemo, useContext } from "react"
import { useTheme } from "@emotion/react"
import { useSpring } from "react-spring"
import { rgba } from "polished"
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
  const theme = useTheme()
  const headerHeight = useContext(HeaderHeightContext)
  const headerHeightRef = useRef(headerHeight)
  const tabsRef = useRef<HTMLDivElement>(null)
  const [isOnTop, setIsOnTop] = useState(false)

  const styleProps = useSpring({
    background: isOnTop
      ? rgba(theme.colors.categoryTabs.background, 1)
      : rgba(theme.colors.categoryTabs.background, 0)
  })

  useMemo(() => (headerHeightRef.current = headerHeight), [headerHeight])

  useEffect(() => {
    if (tabsRef.current) {
      setTabsHeight(tabsRef.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (tabsRef.current) {
        const tabsTop = tabsRef.current?.getBoundingClientRect().top
        setIsOnTop(tabsTop <= headerHeightRef.current)
      }
    }

    global?.window?.addEventListener("scroll", throttle(scrollListener, 100))
    return () => {
      global?.window?.removeEventListener("scroll", throttle(scrollListener, 100))
    }
  }, [])

  const handleUpdate = (scrolledSectionEl: HTMLElement) => {
    if (scrolledSectionEl) {
      const id = scrolledSectionEl.id
      // get location hash without #
      const locationHash = global?.window?.location?.hash.slice(1)
      const matchingTab = tabsRef?.current?.querySelector<HTMLAnchorElement>(`[href='#${id}']`)

      if (tabsRef.current) {
        // delay tabs scrolling when navigating from a hash
        if (locationHash !== "") {
          if (id === locationHash) {
            if (matchingTab) {
              // wait for page to scroll to section before scrolling the Tab
              setTimeout(() => {
                tabsRef.current.scroll({
                  left: matchingTab.offsetLeft - matchingTab.offsetWidth,
                  behavior: "smooth"
                })
              }, 600)
            }
          }
          // update tabs ref on page scroll only, not navigation
        } else {
          tabsRef.current.scroll({
            left: matchingTab.offsetLeft - matchingTab.offsetWidth,
            behavior: "smooth"
          })
        }
      }
    }
  }

  return (
    <Tabs style={{ top: headerHeightRef.current - 1, ...styleProps }} ref={tabsRef}>
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
