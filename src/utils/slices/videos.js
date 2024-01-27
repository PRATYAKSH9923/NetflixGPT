import { createSlice } from "@reduxjs/toolkit";

const videos = createSlice({
    name: 'videos',
    initialState: {
        videos: null,
        videos1: null,
        video2: null,
        video3: null
    },
    reducers: {
        setVideos(state, action){
            state.videos = action.payload;
        },
        setVideos1(state, action){
            state.videos1 = action.payload;
        },
        setVideos2(state, action){
            state.videos2 = action.payload;
        },
        setVideos3(state, action){
            state.videos3 = action.payload;
        }
    }
});

export const { setVideos, setVideos1, setVideos2, setVideos3 } =  videos.actions;
export default videos.reducer