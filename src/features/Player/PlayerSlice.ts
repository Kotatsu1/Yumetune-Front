import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
    isPlaying: boolean,
    selectedSong: number

}

const initialState: PlayerState = {
    isPlaying: false,
    selectedSong: 0
};

const PlayerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerState(state, action) {
      state.isPlaying = action.payload;
    },
    setSelectedSong(state, action) {
      state.selectedSong = action.payload;
    }
  },
});

export const { setPlayerState, setSelectedSong } = PlayerSlice.actions;

export default PlayerSlice.reducer;
