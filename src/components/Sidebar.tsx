import React from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/store'; 
import { Link } from 'react-router-dom';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function Sidebar() {
  const { isSideBarVisible } = useTypedSelector((store) => store.sideBar);
  const { isLogIn } = useTypedSelector((store) => store.signIn);

  return (
    <div className="flex">
      
      <div 
        className={`bg-gray-800 text-white flex flex-col items-center justify-start pt-5 
        ${isSideBarVisible ? 'w-[200px]' : 'w-0'}
        transition-width duration-300 ease-in-out overflow-hidden`}>
       {isLogIn?<Link 
          className="text-2xl mb-5 hover:text-gray-300 transition duration-300 ease-in-out" 
          to={'/usersList'}>
          משתמשים
        </Link>:<></>} 
      </div>
    </div>
  );
}

export default Sidebar;
