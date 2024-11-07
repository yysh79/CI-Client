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
        className={`bg-gray-500 text-white flex flex-col items-center justify-start pt-5
        ${isSideBarVisible ? 'w-[200px] opacity-100' : 'w-0 opacity-0'}
        transition-all duration-300 ease-in-out`}>
        
        <Link 
          className="text-2xl mb-5 hover:text-gray-300 transition duration-300 ease-in-out flex items-center" 
          to={'/usersList'}>
          <img src="/images/logo20.png" alt="Citizen Impact Logo" className="h-48 w-48 object-contain" />

        </Link>

        <Link to={'/CreateQuestionnaire'} className='text-xl font-semibold'><h1>שאלונים</h1></Link>
        
      </div>
    </div>
  );
}

export default Sidebar;
