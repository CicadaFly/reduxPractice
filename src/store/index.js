import { configureStore } from "@reduxjs/toolkit";
import {costReducer, searchNameInput, addCost, removeCost} from './costslice'
import {formReducer, changeName, changeCost} from './formslice'

const store = configureStore({
  reducer: {
    cost: costReducer,
    form: formReducer
  },
})

export { searchNameInput, addCost, removeCost, changeCost, changeName, store}
