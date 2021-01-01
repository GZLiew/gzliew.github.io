import React from 'react'
import Layout from '@/components/Layout'
import Alert from '@/components/Alert'
import Header from '@/components/Header'
import BottomTabs from '@/components/BottomTabs'

type Props = React.ComponentProps<typeof Layout>
type ExtraProps = {
  title?: string
}

const DefaultLayout = ({ children, title, ...rest }: Props & ExtraProps) => {
  return (
    <Layout {...rest}>
      {({ preview, navLinks, hotelConfig }) => {
        const links = navLinks?.length >= 0 ? navLinks : []
        return (
          <div className="min-h-screen">
            <Alert preview={preview} />
            <Header
              title={title}
              navLinks={links}
              hotelLogo={hotelConfig?.content?.hotelLogo}
              hotelLogoDark={hotelConfig?.content?.hotelLogoDark}
            />
            <main>{children}</main>
            {links.length > 0 && <BottomTabs tabs={links} />}
          </div>
        )
      }}
    </Layout>
  )
}

export default DefaultLayout
