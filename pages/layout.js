import React from 'react'
import Navbar from './navbar'

const layout = ({ children }) => {
  return (
    <div className='main'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout