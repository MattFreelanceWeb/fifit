import React from 'react'

type Props = {children:any}

function Layout({children}: Props) {
  return (
    <>
        {children}
    </>
  )
}

export default Layout