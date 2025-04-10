import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productType } from '../../common/type/types'

interface productState{
    products:productType[]
}
const initialState:productState={
    products:[]
}

const productsSlice= createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct:(state, action:PayloadAction<productType>)=> {
        const payload=action.payload;
        state.products.push({
        id: payload.id,
        name: payload.name,
        price:payload.price,
        category:payload.category,
        stock:payload.stock,
        description:payload.description
      });
    },
    
   
  },
})

export const { addProduct, } = productsSlice.actions;
export const productSelected=(state:{products:productState})=>state.products.products;
export default productsSlice.reducer