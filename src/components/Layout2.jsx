import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout2 = () => {
  return (
   <>
    <main className='admin-main-section'>
        <Outlet/>
    </main>
   </>
  )
}

export default Layout2