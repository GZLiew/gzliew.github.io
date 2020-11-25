import React, { useCallback, useEffect, useState } from "react"
import CheckListItem from "../CheckListItem"
import { Base, ErrorLabel } from "./CheckList.styles"

type ListItem = {
  id: string
  title: string
}

type Props = {
  items: ListItem[]
  onChange: (itemsSelected: ListItem[]) => void
  limit?: number
  errorMsg?: string
}

const CheckList = ({ items, errorMsg, onChange, limit = items.length }: Props) => {
  const [selected, setSelected] = useState<ListItem[]>([])
  const [isError, setIsError] = useState(false)

  const onSelectItem = useCallback(
    (item: ListItem) => {
      setIsError(false)
      setSelected((prevItems) => {
        if (prevItems.includes(item)) {
          return prevItems.filter((prevItem) => item.id !== prevItem.id)
        }
        if (limit === 1 && prevItems.length === 1) return [item]
        if (prevItems.length === limit) {
          setIsError(true)
          return prevItems
        }
        return [...prevItems, item]
      })
    },
    [setSelected, isError]
  )

  useEffect(() => {
    onChange(selected)
  }, [selected, onChange])

  return (
    <Base>
      {items.map((item) => (
        <CheckListItem
          onClick={() => onSelectItem(item)}
          selected={selected.includes(item)}
          key={item.id}
          label={item.title}
        />
      ))}
      {isError && errorMsg && <ErrorLabel>{errorMsg}</ErrorLabel>}
    </Base>
  )
}

export default CheckList
