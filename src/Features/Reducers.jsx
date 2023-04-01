import { createSlice } from '@reduxjs/toolkit'

const checkStorage = JSON.parse(localStorage.getItem('savedItem'))

const initialState = {
  saveContainer: checkStorage || []
}


const SaveItem = createSlice({
  name: 'savedItem',
  initialState,
  reducers: {
    saved: (state, action) => {
      const meal = action.payload
      const exist = state.saveContainer.find((x) => x.idMeal == meal.idMeal)
      // It checks if the item already exists in the state and adds it to the array
      if (!exist) {
        state.saveContainer.push(meal)
      } 
    },

    // Removes the item whose id matches the payload from the state
    remove: (state, action) => {
      state.saveContainer = state.saveContainer.filter((x) => x.idMeal !== action.payload)
    },

    clear: (state) => {
      state.saveContainer = []
    }
  }
})

export default SaveItem.reducer
export const {saved, remove, clear} = SaveItem.actions 