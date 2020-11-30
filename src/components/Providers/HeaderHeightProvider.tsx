import React, { createContext, ReactNode, useContext, useMemo, useState } from "react"

const HeaderHeightContext = createContext<{
  headerHeight: number
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>
}>(undefined)

type Props = {
  children: ReactNode
}

const HeaderHeightProvider = ({ children }: Props) => {
  const [headerHeight, setHeaderHeight] = useState(0)

  const provided = useMemo(
    () => ({
      headerHeight,
      setHeaderHeight
    }),
    [headerHeight]
  )

  return <HeaderHeightContext.Provider value={provided}>{children}</HeaderHeightContext.Provider>
}

export const useHeaderHeight = () => useContext(HeaderHeightContext)

export default HeaderHeightProvider
