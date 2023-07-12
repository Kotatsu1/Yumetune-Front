import { createSlice } from "@reduxjs/toolkit";

interface SongsState {
    artist: string;
    title:  string;
    length: number;
    id:     number;
}

interface initialState {
    data: SongsState[];
}

const initialState: initialState = {
    data: [],
};

const SongsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    }
  },
});

export const { setData } = SongsSlice.actions;

export default SongsSlice.reducer;
