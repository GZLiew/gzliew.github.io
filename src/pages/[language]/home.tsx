import { useRef, useEffect } from "react"
import { useRouter } from "next/router"

import getLocalizedSlug from "@/lib/utils/getLocalizedSlug"

import Link from "next/link"

const FakeHomePage = () => {
  const router = useRouter()
  const realHomeRoute = useRef<string>("")

  useEffect(() => {
    if (router.query?.language) {
      realHomeRoute.current = getLocalizedSlug("/", router.query?.language as string)
      router.replace(realHomeRoute.current)
    }
  }, [router.query])

  return (
    <div>
      Redirecting you to{" "}
      <Link href={realHomeRoute.current}>
        <a style={{ textDecoration: "underline" }}>Home page</a>
      </Link>
    </div>
  )
}

export default FakeHomePage
