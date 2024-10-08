import { configureStore } from '@reduxjs/toolkit';
import sideBarReducer from './sideBarSlice';
import { SideBarState } from './sideBarSlice';

const store  = configureStore({
    reducer: {
        sideBar: sideBarReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;