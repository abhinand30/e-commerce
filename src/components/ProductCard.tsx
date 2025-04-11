import React from 'react'

import cartIcon from '../assets/cart.png'
import { productProps } from '../common/type/types';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, cartselected } from '../redux/slice/cartSlice';


const ProductCard:React.FC<productProps> = (props) => {
  const {product} =props;
  const disptach=useDispatch();
  const cartItems=useSelector(cartselected);

  const handleAddCart=()=>{
    try{
      // disptach(addCart({id:cartItems.length+1,
      //   productName: product.name,
      //   price:Number(product.price),
      //   quantity:1,
      //   image:product.image,
      //   // userId:userId
      // }))
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="w-full relative group gap-1 border-[1px]  ">
    <div className="w-80 max-h-80 relative overflow-y-hidden ">
      <div>
        <img className="w-60 h-50" src={product.image} />
      </div>
      
    </div>
    <div className="max-w-80 py-6 flex flex-col px-4">
      <div className="flex items-center justify-between font-titleFont">
        <div>
        <h2 className="text-lg text-primeColor font-bold">
          {product.name}
        </h2>
        <p className="text-[#767676] text-[14px]">{product.price}</p>
        </div>
        <button onClick={handleAddCart} className='bg-color/Users/abhinandnarayanan/Downloads/cart.png'>
        <img src={cartIcon}/>
        </button>
      </div>
      
    </div>
  </div>
  )
}

export default ProductCard