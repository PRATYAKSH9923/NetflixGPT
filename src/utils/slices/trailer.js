import { createSlice } from "@reduxjs/toolkit";

const trailer = createSlice({
    name: 'trailer',
    initialState: {
        trailer: null
    },
    reducers: {
        setTrailer(state, action){
            state.trailer = action.payload;
        }
    }
});

export const { setTrailer } =  trailer.actions;
export default trailer.reducer