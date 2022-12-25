import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

//토큰 처리 구역

//청크 사용 구역

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default mainSlice.reducer;
