import { useSelector } from 'react-redux';

import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { productSelected } from '../../redux/slice/productSlice';
import { useEffect, useState } from 'react';


const UserHome = () => {
  const products=useSelector(productSelected);

  const [userData,setUserData]=useState([])

  useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem("loginDetails"));
      if (savedData) {
        setUserData(savedData);
      }
    }, []);

  return (
    <div>
      <Header/>
      <div className="m-10 grid grid-cols-3 gap-4">
  {products.map((item,index) => (
    <ProductCard key={index} product={item}/>
  ))}
</div>

    </div>
  )
}

export default UserHome;