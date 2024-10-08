import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux';
import { showSideBar } from '../store/sideBarSlice';
import {AppDispatch} from '../store/store'

const Header = () => {

  const dispatch :AppDispatch  = useDispatch();
  const handleClick = (): void => {dispatch(showSideBar())}
  return (
    <div className="flex  bg-gray-800 text-white p-4">
      <RxHamburgerMenu onClick={handleClick} />

      Header
    </div>
  )
}

export default Header