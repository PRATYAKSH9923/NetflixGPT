import { configureStore } from "@reduxjs/toolkit";
import userinfo from "./slices/userInfo"
import user from "./slices/user"
import videos from "./slices/videos"
import trailer from "./slices/trailer"

const store = configureStore({
    reducer:{
        userinfo: userinfo,
        user: user,
        videos: videos,
        trailer:trailer
    }
    });
    
    export default store