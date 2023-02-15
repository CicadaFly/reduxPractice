import { createSlice,nanoid } from "@reduxjs/toolkit";

const costSlice = createSlice({
  name: 'cost',
  initialState: {
    searchName: '',
    costData: []
  },
  reducers: {
    searchNameInput(state, action){
      state.searchName = action.payload
    },
    addCost(state, action){
      state.costData.push({
        costName: action.payload.name,
        costCost: action.payload.cost,
        id: nanoid()
      })
    },
    removeCost(state, action){
      const updated = state.costData.filter(
        (cost) => {return cost.id !== action.payload}
      );
      state.costData = updated
    },
  },
});

export const {searchNameInput, addCost, removeCost} = costSlice.actions
export const costReducer = costSlice.reducer