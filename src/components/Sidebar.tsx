import React from 'react'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../store/store'; 
import { Link } from 'react-router-dom'


const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function Sidebar() {
  const { isSideBarVisible } = useTypedSelector((store) => store.sideBar)

  return (
    <>
    {isSideBarVisible? <div className='flex-col pt-5 text-center ml-auto w-[200px] h-screen  bg-gray-500'>
      
      <Link className='text-white text-2xl  hover:text-gray-300 transition duration-300' to={'/usersList'}>
      <img src="images/logo20.png" alt="Citizen Impact Logo" className="h-48 w-48 object-contain"/>
      </Link>
    </div>: <></>}
    </>
    
    
  )
}

export default Sidebar
