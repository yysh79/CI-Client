import {createSlice} from '@reduxjs/toolkit';


export interface SideBarState {
    isSideBarVisible: boolean;
}
const initialState : SideBarState = {
    isSideBarVisible: true

}
const sideBarSlice = createSlice({
    name: 'sideBarSlice',
    initialState,
    reducers:{
        showSideBar: (state) => {
            state.isSideBarVisible = !state.isSideBarVisible
        }
    }

})

export const {showSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer;