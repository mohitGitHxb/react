// import {combineReducers} from 'redux';
// import { cartReducer } from './reducer';

// const Rootred = combineReducers({
//     cartReducer,
// });

// export default Rootred
import { createSlice } from "@reduxjs/toolkit";


const INIT_STATE = {
  carts: [],
  totalPrice:0,
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: INIT_STATE,
  reducers: {
    ADD(state,action) {
        const ItemIndex = state.carts.findIndex(
            (item) => item.id === action.payload.id
            );
            console.log(ItemIndex)
            // console.log(action.payload.id)

          if (ItemIndex >= 0 && state.carts[ItemIndex].qnty < 15) {
            state.carts[ItemIndex].qnty += 1;
            // return {
            //   ...state,
            //   carts: [...state.carts],
            state.totalPrice+=state.carts[ItemIndex].price
            // };
          } else if(ItemIndex<0){
            const temp = { ...action.payload, qnty: 1 };
            state.carts.push(temp);
            state.totalPrice+=temp.price;
            // return {
              //   ...state,
              //   carts: [...state.carts, temp],
              // };
            }
          },
          DLT(state,action){
            
            const ItemIndex = state.carts.findIndex(
                (item) => item.id === action.payload.id
                );
            const data = state.carts.filter((el) => el.id !== action.payload.id);
            // console.log(data);
            state.totalPrice-=state.carts[ItemIndex].price*state.carts[ItemIndex].qnty;
            state.carts = data
            
            // return {
            //   ...state,
            //   carts: data,
            // };
        },

        REMOVE(state,action){
            
            const ItemIndex_dec = state.carts.findIndex(
              (item) => item.id === action.payload.id
            );
            console.log(ItemIndex_dec);
  
            if (state.carts[ItemIndex_dec].qnty >= 1) {
              const dltitems = (state.carts[ItemIndex_dec].qnty -= 1);
              console.log([...state.carts, dltitems]);
              state.totalPrice -= state.carts[ItemIndex_dec].price;
  
            //   return {
            //     ...state,
            //     carts: [...state.carts],
            //   };
            } else if (state.carts[ItemIndex_dec].qnty === 1) {
              const data = state.carts.filter((el) => el.id !== action.payload);
              state.totalPrice -= state.carts[ItemIndex_dec].price;
                state.carts = data
            //   return {
            //     ...state,
            //     carts: data,
            //   };
            }
        }
        


    },
  },
);
export const cartActions = cartSlice.actions;

export default cartSlice;