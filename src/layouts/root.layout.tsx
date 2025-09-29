import React from 'react'
import { Outlet } from 'react-router'
import { Toaster } from "@/components/ui/sonner"

const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <Toaster/>
    </div>
    
  )
}

export default RootLayout