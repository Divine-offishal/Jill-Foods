import { configureStore } from '@reduxjs/toolkit'
import SaveItemReducer from '../Features/Reducers'

const Store = configureStore({
  reducer :{
    saveItem: SaveItemReducer
  }
})

export default Store