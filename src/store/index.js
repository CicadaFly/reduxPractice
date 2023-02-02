import { configureStore } from "@reduxjs/toolkit";
import {carReducer, searchNameInput, addCar, removeCar} from './carslice'
import {formReducer, changeName, changeCost} from './formslice'

const store = configureStore({
  reducer: {
    car: carReducer,
    form: formReducer
  }
})

export { searchNameInput, addCar, removeCar, changeCost, changeName, store}
