import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/infiniteScroll/postsSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})

export default store