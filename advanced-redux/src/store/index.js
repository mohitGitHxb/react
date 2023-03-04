import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './UIslice';
import cartSlice from './CartSlice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;