import React, { useState, useRef, useEffect, useMemo, useContext, MouseEvent } from "react"
import { useTheme } from "@emotion/react"
import { useSpring } from "react-spring"
import { useGesture } from "react-use-gesture"
import useMeasure from "@/lib/hooks/useMeasurePolyfilled"
import useLockBodyScroll from "@/lib/hooks/useLockBodyScroll"
import { rgba } from "polished"
import { throttle, debounce } from "lodash"

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
  const [currentId, setCurrentId] = useState<string>(null)
  const dragLeftBound = useRef<number>(null)
  const [isXScrolling, setIsXScrolling] = useState(false)

  // lock scroll when the Tabs are being dragged
  useLockBodyScroll(isXScrolling, tabsRef)

  // get first render value only
  useEffect(() => {
    // only allow dragging the remaining distance between the viewport width and the scroll width
    dragLeftBound.current = -(tabsRef?.current?.scrollWidth - tabsRef?.current?.clientWidth)
  }, [])

  // measure the Tabs width to enable drag gesture on mobile only. See useDrag below
  const [measureRef, { width }] = useMeasure()

  const styleProps = useSpring({
    background: isOnTop
      ? rgba(theme.colors.categoryTabs.background, 1)
      : rgba(theme.colors.categoryTabs.background, 0)
  })

  // enable touch drag on Tabs
  const [{ x }, setTranslate] = useSpring(() => ({ x: 0 }))
  const bind = useGesture(
    {
      onDragStart: () => setIsXScrolling(true),
      onDrag: ({ down, offset: [mx], tap }) => {
        let newX = 0
        if (!tap && width < 576) {
          // if the gesture isn't a tap & it's a small screen
          newX = mx
        } else if (x.getValue() !== 0) {
          // if x was changed by handleUpdate, set x to that value
          newX = x.getValue()
        }
        setTranslate({ x: newX, immediate: down })
      },
      onDragEnd: () => setIsXScrolling(false)
    },
    {
      drag: {
        filterTaps: true,
        bounds: {
          left: dragLeftBound.current,
          right: 0
        },
        axis: "x",
        initial: () => [x.getValue(), 0]
      }
    }
  )

  useMemo(() => (headerHeightRef.current = headerHeight), [headerHeight])

  useEffect(() => {
    if (tabsRef.current) {
      measureRef(tabsRef.current)
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

  // Scrollspy fires an update event when a spied Section is now in the viewport.
  // Match a Tab with the updated Section and translate the Tabs Container to be fully in view
  // Debounce the function so it only fires the last event, skipping the events fired of the
  // intermediate sections between the previous selected tab & the truly last one.
  const handleUpdate = debounce((scrolledSectionEl: HTMLElement) => {
    if (scrolledSectionEl) {
      const id = scrolledSectionEl.id
      // decouple the Scrollspy from the children Tab component and set the current Section ID from this event.
      // This makes it way easier to use react-spring on Container
      setCurrentId(id)

      const matchingTab = tabsRef?.current?.querySelector<HTMLAnchorElement>(`[href='#${id}']`)
      if (tabsRef.current && matchingTab) {
        // the distance from the start of the Container to the end point of the matchingTab
        const tabXOffset = matchingTab.clientWidth + matchingTab.offsetLeft

        // if the current tab is partially in view on either side
        if (tabXOffset > tabsRef.current.clientWidth || matchingTab.getBoundingClientRect().left < 0) {
          // calculate the distance needed for the matchingTab to be fully in view
          const offset = tabsRef.current.clientWidth - tabXOffset
          setTranslate({
            // only set negative values so Tabs won't move to the right from the initial position
            x: offset < 0 && width < 576 ? offset : 0
          })
        }
      }
    }
  }, 150)

  // Safari, IE11 & Opera don't support smooth scrolling (see: https://caniuse.com/#feat=css-scroll-behavior).
  // Hijack the tab click event to not trigger the native scroll behavior on these browsers and synthetically trigger
  // smooth scroll with the help of `smoothscroll-polyfill`.
  const handleTabClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!("scrollBehavior" in global?.document?.documentElement?.style)) {
      e.preventDefault()
      const sectionId = e.currentTarget.dataset.slug
      const matchingSection = global?.document?.getElementById(sectionId)

      if (matchingSection) {
        matchingSection.scrollIntoView({
          behavior: "smooth"
        })
      }
    }
  }

  return (
    <React.Fragment>
      <Scrollspy
        items={categories.map((cat) => cat.slug)}
        offset={-(headerHeight + 50 + 10)}
        onUpdate={handleUpdate}
      />
      <Tabs style={{ top: headerHeightRef.current - 1, ...styleProps }} ref={tabsRef}>
        <Container
          {...bind()}
          style={{
            transform: x.interpolate((x) => `translateX(${x}px)`)
          }}>
          {categories.map(({ _uid, title, slug }, i) => (
            <Tab
              href={`#${slug}`}
              data-slug={slug}
              key={_uid}
              className={slug === currentId ? "active" : null}
              onClick={handleTabClick}>
              <span>{title}</span>
            </Tab>
          ))}
        </Container>
      </Tabs>
    </React.Fragment>
  )
}

export default CategoryTabs
