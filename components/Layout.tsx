import React, { Children, ReactElement } from 'react'
import { Header } from '.'

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <div className="container mx-auto h-screen ">
        <Header />
        <div className="container bg-white bg-post  pt-10">{children}</div>
      </div>
    </>
  )
}

export default Layout
