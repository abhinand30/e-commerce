import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { orderStates } from '../../common/type/types'

interface orderState{
    orders:orderStates[]
}
const initialState:orderState={
    orders:[]
}

const ordersSlice= createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addorder:(state, action:PayloadAction<orderStates>)=> {
        const payload=action.payload;
        state.orders.push({
        id: payload.id,
        products: payload.products,
        userId:payload.userId,
        userName:payload.userName,
        totalPrice:payload.totalPrice,
      });
    }, 
    deleteAll:(state, action: PayloadAction<number>) => {
      state.orders=[]
    } 
  },
})

export const { addorder,deleteAll } = ordersSlice.actions;
export const orderselected=(state:{orders:orderState})=>state.orders?.orders;
export default ordersSlice.reducer