import React from 'react'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../store/store'; 
import { Link } from 'react-router-dom'


const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function Sidebar() {
  const { isSideBarVisible } = useTypedSelector((store) => store.sideBar)

  return (
    <>
    {isSideBarVisible? <div className=' ml-auto w-[200px] h-screen bg-green-100 '>
      <h1>Sidebar.</h1>
      <Link  to={'/usersList'}>משתמשים</Link>
    </div>: <></>}
    </>
    
    
  )
}

export default Sidebar
