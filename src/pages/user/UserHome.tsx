import { useSelector } from 'react-redux';

import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { productSelected } from '../../redux/slice/productSlice';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';



const UserHome = () => {
  const products = useSelector(productSelected);

  const [productArray,setProductArray]=useState([]);
  
  useEffect(()=>{
    const filteredProduct=products.filter((product)=>{
      if(product.stock){
        return product.stock>0;
      }
    });
    setProductArray(filteredProduct)
}, [products])
  


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