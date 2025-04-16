import { useSelector } from 'react-redux';

import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { productSelected } from '../../redux/slice/productSlice';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { selectedFavorites } from '../../redux/slice/favoriteSlice';
import {  productType } from '../../common/type/types';



const UserHome = () => {
  const products = useSelector(productSelected);
  const favoriteData=useSelector(selectedFavorites);
  const [productArray,setProductArray]=useState<productType[]>([]);


  useEffect(()=>{
    const filteredProduct:productType[] = products
    .filter((product) => product.stock > 0)
    .map((product) => ({
      ...product,
      selected: favoriteData.some((favorite) => favorite.productId === product.id),
    }));
    setProductArray(filteredProduct)
}, [products,favoriteData])
  


  return (
    <div>
      <Header />
      <div className="m-10 grid grid-cols-3 gap-4">
      
        {productArray.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default UserHome;