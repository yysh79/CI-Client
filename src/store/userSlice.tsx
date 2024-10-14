import {createSlice} from '@reduxjs/toolkit';


export interface isLogInState {
    isLogIn: boolean;
}
const initialState : isLogInState = {
    isLogIn: false

}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        logIn: (state) => {
            state.isLogIn = true;
        }
    }

})

export const {logIn} = userSlice.actions;
export default userSlice.reducer;