import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: 'userinfo',
    initialState: {
        emailid: true
    },
    reducers: {
        getId(state){
            return state.emailid
        },
        setId(state, action){
            state.emailid= action.payload;
        }
    }
});

export const { getId ,setId } =  userInfo.actions;
export default userInfo.reducer