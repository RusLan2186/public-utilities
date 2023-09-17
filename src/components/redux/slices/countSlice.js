import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coldWaterCount: 0,
  hotWaterCount: 0,
  energyCount: 0,
  gazCount: 0,
  heatingCount: 0,
  totalCount: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    countColdWater: (state, action) => {
      state.coldWaterCount = 25 * action.payload;
    },
    countHotWater: (state, action) => {
      state.hotWaterCount = 80.62 * action.payload;
    },
    countEnergy: (state, action) => {
      state.energyCount = 2.64 * action.payload;
    },
    countGaz: (state, action) => {
      state.gazCount = 7.9 * action.payload;
    },
    countHeating: (state, action) => {
      state.heatingCount = 9.58 * action.payload;
    },
    countTotal: (state, action) => {
      state.totalCount =
        state.heatingCount +
        state.gazCount +
        state.energyCount +
        state.hotWaterCount +
        state.coldWaterCount;
    },
  },
});
export const { countColdWater, countHotWater, countEnergy, countGaz, countHeating, countTotal } =
  countSlice.actions;
export default countSlice.reducer;
