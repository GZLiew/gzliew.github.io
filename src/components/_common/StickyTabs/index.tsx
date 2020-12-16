import React, { useState, useRef, useEffect, MouseEvent } from 'react'
import { useTheme } from '@emotion/react'
import { useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import useMeasure from '@/lib/hooks/useMeasurePolyfilled'
import useLockBodyScroll from '@/lib/hooks/useLockBodyScroll'
import { rgba } from 'polished'
import { throttle, debounce } from 'lodash'
import Scrollspy from 'react-scrollspy'

import { Tabs, Container, Tab } from './categoryTabs.styles'

export const TABS_HEIGHT = 50

type Item = {
  title: string
  slug: string
}

interface Props {
  items: Item[]
  offset?: number
}

const StickyTabs = ({ items, offset = 0 }: Props) => {
  const theme = useTheme()
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
        axis: 'x',
        initial: () => [x.getValue(), 0]
      }
    }
  )

  useEffect(() => {
    if (tabsRef.current) {
      measureRef(tabsRef.current)
    }
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (tabsRef.current) {
        const tabsTop = tabsRef.current?.getBoundingClientRect().top
        setIsOnTop(tabsTop <= offset)
      }
    }

    global?.window?.addEventListener('scroll', throttle(scrollListener, 100))
    return () => {
      global?.window?.removeEventListener('scroll', throttle(scrollListener, 100))
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

  const handleTabClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const sectionId = e.currentTarget.dataset.slug
    const matchingSection = global?.document?.getElementById(sectionId)

    if (matchingSection) {
      window.scrollTo({
        top: matchingSection.offsetTop - offset - TABS_HEIGHT,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <React.Fragment>
      <Scrollspy
        items={items.map((item) => item.slug)}
        offset={-(offset + 50 + 10)}
        onUpdate={handleUpdate}
      />
      <Tabs style={{ top: offset - 1, ...styleProps }} ref={tabsRef}>
        <Container
          {...bind()}
          style={{
            transform: x.interpolate((x) => `translateX(${x}px)`)
          }}>
          {items.map(({ title, slug }) => (
            <Tab
              href={`#${slug}`}
              data-slug={slug}
              key={slug + title}
              className={slug === currentId ? 'active' : null}
              onClick={handleTabClick}
              height={TABS_HEIGHT}>
              <span>{title}</span>
            </Tab>
          ))}
        </Container>
      </Tabs>
    </React.Fragment>
  )
}

export default StickyTabs
