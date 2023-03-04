import { configureStore } from '@reduxjs/toolkit'
// import cartSlice from './reducers/reducer'
import cartSlice from './reducers/index'
const Store = configureStore({ reducer: cartSlice.reducer })
export default Store;