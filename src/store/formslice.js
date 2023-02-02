import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    carName: '',
    carCost: 0
  },
  reducers: {
    changeName(state, action){
      state.carName = action.payload
    },
    changeCost(state, action){
      state.carCost = action.payload
    }
  }
});

export const {changeName, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;