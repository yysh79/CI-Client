import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";

import { useSelector, useDispatch } from 'react-redux';
import { showSideBar } from '../store/sideBarSlice';
import { AppDispatch } from '../store/store';
import { Link, useLocation } from 'react-router-dom';
import SearchDialogue from './SearchDialogue';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = (): void => { dispatch(showSideBar()) };

  // Get the current location
  const location = useLocation();

  return (
    <div className="flex items-center justify-between bg-gray-300 text-black p-4">

      <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-300">
        <Link to={"/logIn"}> <FaCircleUser className='text-gray-500' size={30} /></Link>
        <div className="text-gray-700 font-semibold">
          התחברות
        </div>
      </div>
      
      {location.pathname === '/usersList' && (
        <div className="flex items-center justify-center flex-1">
          <SearchDialogue/>
        </div>
      )}

      <RxHamburgerMenu color='black' size={30} className="ml-auto hover:text-gray-500 transition duration-300" onClick={handleClick} />
    </div>
  );
}

export default Header;
