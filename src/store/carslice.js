import { createSlice,nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: 'car',
  initialState: {
    searchName: '',
    carData: []
  },
  reducers: {
    searchNameInput(state, action){
      state.searchName = action.payload
    },
    addCar(state, action){
      state.carData.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()
      })
    },
    removeCar(state, action){
      const updated = state.carData.filter(
        (car) => {return car.id !== action.payload}
      );
      state.carData = updated
    },
  },
});

export const {searchNameInput, addCar, removeCar} = carSlice.actions
export const carReducer = carSlice.reducer