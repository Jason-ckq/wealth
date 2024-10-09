import { createSlice } from '@reduxjs/toolkit';

// 下拉插件
const WeddingSlice = createSlice({
  name: 'Wedding',
  initialState: {
    isPlay: false,
    isVisible: false,
  },
  reducers: {
    // 更换重点对象
    doChangePlay(state, action) {
      state.isPlay = action.payload;
    },
    doChangeVisible(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { doChangePlay, doChangeVisible } = WeddingSlice.actions;

export default WeddingSlice.reducer;
