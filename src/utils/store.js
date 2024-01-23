import { configureStore } from "@reduxjs/toolkit";
import userinfo from "./slices/userInfo"
import user from "./slices/user"

const store = configureStore({
    reducer:{
        userinfo: userinfo,
        user: user
    }
    });
    
    export default store