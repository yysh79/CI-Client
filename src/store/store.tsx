import { configureStore } from '@reduxjs/toolkit';
import sideBarReducer from './sideBarSlice';
import { SideBarState } from './sideBarSlice';
import login from './userSlice'
const store  = configureStore({
    reducer: {
        sideBar: sideBarReducer,
        signIn: login 
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;