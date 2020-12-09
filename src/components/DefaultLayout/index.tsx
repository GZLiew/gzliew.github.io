import React from 'react'
import Layout from '@/components/Layout'
import Alert from '@/components/Alert'
import Header from '@/components/Header'

type Props = React.ComponentProps<typeof Layout>

const DefaultLayout = ({ children, ...rest }: Props) => {
  return (
    <Layout {...rest}>
      {({ preview, navLinks, hotelConfig }) => {
        const links = navLinks?.length >= 0 ? navLinks[0]?.links : []
        return (
          <div className="min-h-screen">
            <Alert preview={preview} />
            <Header
              navLinks={links}
              hotelLogo={hotelConfig?.content?.hotelLogo}
              hotelLogoDark={hotelConfig?.content?.hotelLogoDark}
            />
            <main>{children}</main>
          </div>
        )
      }}
    </Layout>
  )
}

export default DefaultLayout
