import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

import { getLocalizedSlugNode } from '@/lib/utils/getLocalizedSlug'

import Link from 'next/link'

const FakeHomePage = () => {
  const router = useRouter()
  const realHomeRoute = useRef<string>('')

  useEffect(() => {
    console.log(router.query)
    if (router.query?.language) {
      realHomeRoute.current = getLocalizedSlugNode(router.query?.language as string, '/')
    } else {
      realHomeRoute.current = getLocalizedSlugNode('', '/')
    }
    router.replace(realHomeRoute.current)
  }, [router.query])

  return (
    <div>
      Redirecting you to{' '}
      <Link href={realHomeRoute.current}>
        <a style={{ textDecoration: 'underline' }}>Home page</a>
      </Link>
    </div>
  )
}

export default FakeHomePage
