import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cartState } from '../../common/type/types'

interface cartstate{
    carts:cartState[]
}
const initialState:cartstate={
    carts:[]
}

const cartsSlice= createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart:(state, action:PayloadAction<cartState>)=> {
        const payload=action.payload;
        state.carts.push({
        id: payload.id,
        productName: payload.productName,
        price:payload.price,
        quantity:payload.quantity,
        image:payload.image,
        userId:payload.userId
      });
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      
      const item = state.carts.find(Cart => Cart.id === action.payload);
      if (item) {
        item.quantity+=1
      }
    },    
    decreaseQuantity: (state, action: PayloadAction<number>) => {
        const item = state.carts.find(Cart => Cart.id === action.payload);
        if (item) {
          item.quantity-=1
        }
    },
    deleteCart: (state, action: PayloadAction<number>) => {
        state.carts = state.carts.filter(cart => cart.id !== action.payload);
      },
  },
})

export const { addCart,increaseQuantity,decreaseQuantity,deleteCart } = cartsSlice.actions;
export const cartselected=(state:{carts:cartstate})=>state.carts?.carts;
export default cartsSlice.reducer