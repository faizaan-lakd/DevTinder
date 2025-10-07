import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feedSlice",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeUserFromFeed: (state, action) => {
      const newFeedArray = state.filter((user) => user._id !== action.payload);
      return newFeedArray;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
