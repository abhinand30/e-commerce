import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { productProps } from '../common/type/types';
import { addCart, cartselected } from '../redux/slice/cartSlice';
import { currentUser } from '../redux/slice/authSlice';
import { addFavorite, deleteFavorite } from '../redux/slice/favoriteSlice';
import heartIcon from '../assets/heartIcon.png'
import heartFilledIcon from '../assets/heartFilledIcon.png'



const ProductCard: React.FC<productProps> = (props) => {
  const { product } = props;

  const cartItems = useSelector(cartselected);
  const user = useSelector(currentUser);
  console.log(product.selected)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCart = () => {
    try {

      dispatch(
        addCart({
          id: cartItems.length + 1,
          productName: product.name,
          productId: product.id,
          price: Number(product.price),
          quantity: 1,
          image: product.image,
          userId: user?.id,
          userName: user?.name,
        })
      );
      toast.success("Item added to cart");
    } catch (error) {
      console.error(error);
    }
  };

  const onNavigate = () => {
    navigate('cart')
  }

  const isInCart = cartItems.some(
    (item) => item.productId === product.id && item.userId === user?.id
  );

  const handleAddFavorite = () => {
    try {
      console.log('handle')
      dispatch(addFavorite({
        id: product.id,
        productName: product?.name,
        productId: product?.id,
        price: product?.price,
        image: product?.image,
        userId: user?.id,
        userName: user?.name,
      }));
    } catch (error) {
      console.log(error)
    }
  }
const handleDeletefavorite=(id:number)=>{
  try{
    console.log('>>>>')
    dispatch(deleteFavorite(id))
  }catch(error){
    console.log(error);
   
  }
}
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72   border border-gray-200">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="h-auto w-full" />
  
        <button onClick={product.selected?()=>handleDeletefavorite(product.id):handleAddFavorite} className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:scale-105 transition">
          <img  src={product.selected?heartFilledIcon:heartIcon} alt="Favorite" className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{product?.name}</h3>
          <p className="text-gray-600 text-sm mt-1">₹ {product?.price}</p>
        </div>
        {product?.stock&&(
          <p className="text-gray-600 text-sm mt-1">Quantity:{product?.stock}</p>
        )}
        
        <button
          onClick={isInCart ? onNavigate : handleAddCart}
          className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {isInCart ? 'show Cart' : 'Add to Cart'}

        </button>
      </div>
    </div>

  )
}

export default ProductCard