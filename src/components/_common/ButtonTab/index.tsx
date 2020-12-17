import React, { useState, useEffect, useRef } from 'react'
import { useSpring, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import useMeasure from '@/lib/hooks/useMeasurePolyfilled'
import TouchableOpacity from '../TouchableOpacity'

import { Base, Tab, TabOverlay } from './ButtonTab.styles'
import useLockBodyScroll from '@/lib/hooks/useLockBodyScroll'

export type TabItem = {
  id: string
  title: string
}

type Props = {
  items: TabItem[]
  initialIndex?: number
  onChange: (item: TabItem) => void
}

const BaseBorderWidth = 5
const getInitialTabWidth = (items: TabItem[]) => (items.length === 2 ? 164 : 162)

const getOffsetX = (items: TabItem[], item: TabItem, tabWidth: number) => {
  const itemPos = items.indexOf(item)
  const offsetX = tabWidth * itemPos
  const resolvedOffsetX = offsetX - BaseBorderWidth
  return itemPos ? resolvedOffsetX : offsetX
}

const ButtonTab = ({ items, onChange, initialIndex = 0 }: Props) => {
  const eachTabWidthRef = useRef(getInitialTabWidth(items))
  const overlayRef = useRef(null)
  const [activeTab, setActiveTab] = useState<TabItem>(items[initialIndex])
  const [isXScrolling, setIsXScrolling] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [baseRef, { width: baseWidth }] = useMeasure()
  const [props, setTranslate] = useSpring<{ x: number; size: number }>(() => ({
    x: 0,
    size: 1
  }))
  useLockBodyScroll(isXScrolling, overlayRef)

  const rightBound = baseWidth - eachTabWidthRef.current - BaseBorderWidth
  const bind = useDrag(({ down, movement: [mx], args: [currentTab] }) => {
    if (eachTabWidthRef.current === 0) {
      return
    }
    setIsXScrolling(down)
    const itemPos = items.indexOf(currentTab)
    const currOffsetX = eachTabWidthRef.current * itemPos
    const treshold = eachTabWidthRef.current / 2
    const resolvedOffset = currOffsetX + mx
    if (resolvedOffset <= 0) {
      if (!down) setTab(items[0])
      return setTranslate({ x: 0, immediate: down, size: down ? 1.1 : 1 })
    }
    if (resolvedOffset >= rightBound) {
      if (!down) setTab(items[items.length - 1])
      return setTranslate({ x: rightBound, immediate: down, size: down ? 1.1 : 1 })
    }
    setTranslate({ x: resolvedOffset, immediate: down, size: down ? 1.1 : 1 })
    if (!down) {
      const itemPos = Math.floor((resolvedOffset + treshold) / eachTabWidthRef.current)
      const offsetX = eachTabWidthRef.current * itemPos
      setTab(items[itemPos])
      return setTranslate({
        x: itemPos ? offsetX - BaseBorderWidth : offsetX,
        immediate: down,
        size: down ? 1.1 : 1
      })
    }
  })

  const setTab = (item: TabItem) => {
    if (item.id === activeTab.id) return
    setActiveTab(item)
    onChange(item)
  }

  const onTabClick = (item: TabItem) => {
    if (eachTabWidthRef.current && !isXScrolling) {
      const offsetX = getOffsetX(items, item, eachTabWidthRef.current)
      setTranslate({ x: offsetX, immediate: false })
      setTab(item)
    }
  }

  useEffect(() => {
    const itemPos = items.indexOf(activeTab)
    if (initialIndex !== itemPos) {
      onTabClick(items[initialIndex])
    }
  }, [initialIndex])

  useEffect(() => {
    if (items.length > 0) {
      eachTabWidthRef.current = Math.round(baseWidth / items.length)
    }
  }, [baseWidth])

  useEffect(() => {
    if (eachTabWidthRef.current && !initialized) {
      const offsetX = getOffsetX(items, activeTab, eachTabWidthRef.current)
      setTranslate({ x: offsetX, immediate: true })
      setInitialized(true)
    }
  }, [baseWidth, eachTabWidthRef.current, initialized, setTranslate, setInitialized])

  return (
    <Base ref={baseRef}>
      {items.map((item) => (
        <Tab
          onClick={() => !isXScrolling && onTabClick(item)}
          key={item.id}
          isFocused={activeTab.id === item.id}>
          <TouchableOpacity>{item.title}</TouchableOpacity>
        </Tab>
      ))}
      {initialized && (
        <TabOverlay
          {...bind(activeTab)}
          ref={overlayRef}
          style={{
            transform: interpolate([props.x, props.size], (x, s) => `translate3d(${x}px,0,0) scale(${s})`)
          }}
        />
      )}
    </Base>
  )
}

export default ButtonTab
