import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div>
        Este es el navbar
        <Outlet />
    </div>
  )
}

export default LayoutAdmin