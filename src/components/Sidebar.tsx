import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-[200px] h-screen bg-green-400'>
      <h1>Sidebar.</h1>
      <Link  to={'/userList'}>משתמשים</Link>
    </div>
  )
}

export default Sidebar
