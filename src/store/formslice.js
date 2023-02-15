import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    costName: '',
    costCost: 0
  },
  reducers: {
    changeName(state, action){
      state.costName = action.payload
    },
    changeCost(state, action){
      state.costCost = action.payload
    }
  },
  extraReducers(builder){
    builder.addCase("cost/addCost",(state, action) => {
    state.costCost = 0
    state.costName = ''
  })
  },
});

export const {changeName, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;