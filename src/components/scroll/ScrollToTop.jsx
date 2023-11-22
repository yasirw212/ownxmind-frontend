import React from 'react'
import { useEffect } from "react";
import { useLocation } from 'react-router';


const ScrollToTop = () => {
  const { pathname } = useLocation()
  React.useEffect(() => {
      setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 0)
  }, [pathname])
  return null
}


export default ScrollToTop;