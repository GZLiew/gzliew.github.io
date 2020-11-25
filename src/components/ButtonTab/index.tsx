import React, { useState, useEffect, useCallback, useRef } from "react"
import { useSpring, interpolate } from "react-spring"
import { useDrag } from "react-use-gesture"
import useMeasure from "@/lib/hooks/useMeasurePolyfilled"
import TouchableOpacity from "@/components/TouchableOpacity"

import { Base, Tab, TabOverlay } from "./ButtonTab.styles"

type TabItem = {
  id: string
  title: string
}

type Props = {
  items: TabItem[]
  initialIndex?: number
  onChange: (item: TabItem) => void
}

const BaseBorderWidth = 8
const getInitialTabWidth = (items: TabItem[]) => (items.length === 2 ? 164 : 162)

const getOffsetX = (items: TabItem[], item: TabItem, tabWidth: number) => {
  const itemPos = items.indexOf(item)
  const offsetX = tabWidth * itemPos
  const resolvedBorderWidth = itemPos === items.length - 1 ? BaseBorderWidth : BaseBorderWidth - 3
  const resolvedOffsetX = offsetX - resolvedBorderWidth
  return itemPos ? resolvedOffsetX : offsetX
}

const ButtonTab = ({ items, onChange, initialIndex = 0 }: Props) => {
  const eachTabWidthRef = useRef(getInitialTabWidth(items))
  const [activeTab, setActiveTab] = useState<TabItem>(items[initialIndex])
  const [isXScrolling, setIsXScrolling] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [baseRef, { width: baseWidth }] = useMeasure()
  const [props, setTranslate] = useSpring(() => ({
    x: 0,
    size: 1
  }))
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
      setActiveTab(items[0])
      return setTranslate({ x: 0, immediate: down, size: down ? 1.1 : 1 })
    }
    if (resolvedOffset >= rightBound) {
      setActiveTab(items[items.length - 1])
      return setTranslate({ x: rightBound, immediate: down, size: down ? 1.1 : 1 })
    }
    setTranslate({ x: resolvedOffset, immediate: down, size: down ? 1.1 : 1 })
    if (!down) {
      const itemPos = Math.floor((resolvedOffset + treshold) / eachTabWidthRef.current)
      const offsetX = eachTabWidthRef.current * itemPos
      setActiveTab(items[itemPos])
      return setTranslate({
        x: itemPos ? offsetX - BaseBorderWidth : offsetX,
        immediate: down,
        size: down ? 1.1 : 1
      })
    }
  })

  const setTab = useCallback(
    (item: TabItem) => {
      setActiveTab(item)
    },
    [setActiveTab]
  )

  useEffect(() => {
    if (items.length > 0) {
      eachTabWidthRef.current = Math.round(baseWidth / items.length)
    }
  }, [setActiveTab, baseWidth, initialIndex])

  useEffect(() => {
    if (eachTabWidthRef.current && !initialized) {
      const offsetX = getOffsetX(items, activeTab, eachTabWidthRef.current)
      setTranslate({ x: offsetX, immediate: true })
      setInitialized(true)
    }
  }, [baseWidth, eachTabWidthRef.current, initialized, setTranslate, setInitialized])

  useEffect(() => {
    if (eachTabWidthRef.current) {
      const offsetX = getOffsetX(items, activeTab, eachTabWidthRef.current)
      setTranslate({ x: offsetX, immediate: false })
      onChange(activeTab)
    }
  }, [activeTab, setTranslate, onChange])

  return (
    <Base ref={baseRef}>
      {items.map((item) => (
        <Tab onClick={() => !isXScrolling && setTab(item)} key={item.id} isFocused={activeTab.id === item.id}>
          <TouchableOpacity>{item.title}</TouchableOpacity>
        </Tab>
      ))}
      {initialized && (
        <TabOverlay
          {...bind(activeTab)}
          style={{
            transform: interpolate([props.x, props.size], (x, s) => `translate3d(${x}px,0,0) scale(${s})`)
          }}
        />
      )}
    </Base>
  )
}

export default ButtonTab
