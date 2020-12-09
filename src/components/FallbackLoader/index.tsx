import React from 'react'
import { useRouter } from 'next/router'

import LoadingIndicator from '@/components/_common/LoadingIndicator'
import Overlay from '@/components/_common/Overlay'

type Props = {
  children: any
}

const FallbackLoader = ({ children }: Props) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Overlay isOpen>
        <LoadingIndicator size="lg" />
      </Overlay>
    )
  }

  return children
}

export default FallbackLoader
