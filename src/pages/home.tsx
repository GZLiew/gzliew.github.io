import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import getLocalizedSlug from "@/lib/utils/getLocalizedSlug"

import Link from "next/link"

const FakeHomePage = () => {
  const router = useRouter()
  const [realHomeRoute] = useState(getLocalizedSlug("/"))

  useEffect(() => {
    router.replace(realHomeRoute)
  }, [])

  return (
    <div>
      Redirecting you to{" "}
      <Link href={realHomeRoute}>
        <a style={{ textDecoration: "underline" }}>Home page</a>
      </Link>
    </div>
  )
}

export default FakeHomePage
