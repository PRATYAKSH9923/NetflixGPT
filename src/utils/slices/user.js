import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'enableuser',
    initialState: {
        user: null
    },
    reducers: {
        setuserInfo(state, action){
            state.user = action.payload;
        },
        removeUser(state){
            state.user = null;
        }
    }
});

export const { setuserInfo ,removeUser } =  user.actions;
export default user.reducer