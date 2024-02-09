import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

const initialState = {
    isLoading: false,
    isError: null,
    posts: []
}

export const getPosts = createAsyncThunk('getPosts', async (arg, {dispatch, rejectWithValue})=> {
   try {
    const {data} = await axiosInstance.get('/posts?limit=7');
    return data;
   } catch(e) {
    return rejectWithValue(e)
   }
})

const postsSlice = createSlice({
    name: 'posts', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, action)=> {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.posts = state.posts.concat(payload?.posts)
            })
    }
});

export default postsSlice.reducer