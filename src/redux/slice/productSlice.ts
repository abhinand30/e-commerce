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
        description:payload.description,
        image:payload.image
      });
    },
    editProduct: (state, action: PayloadAction<productType>) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },    
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    editProductStock:(state,action:PayloadAction<{id:number;quantity:number}>)=>{
      const editItem=action.payload
      const item=state.products.find((product)=>product.id===editItem.id)
      if(item&&item?.stock>=editItem.quantity){
        item.stock-=editItem.quantity
      }
    }
  },
})

export const { addProduct,editProduct,deleteProduct,editProductStock } = productsSlice.actions;
export const productSelected=(state:{products:productState})=>state.products.products;
export default productsSlice.reducer