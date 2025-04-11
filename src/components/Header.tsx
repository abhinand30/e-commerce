// import React from 'react'

import { Link } from "react-router-dom"
import cartIcon from '../assets/cart.png'
import { useEffect, useState } from "react";

function Header() {
  const [userData,setUserData]=useState()

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("loginDetails"));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  return (
    <div>
        <nav className="flex shadow-2xl space-x-4 h-15 align-center justify-content: space-between;">
  <a href="/dashboard" className="font- rounded-lg px-3 py-4 text-2xl  text-gray-900 font-bold hover:bg-gray-100 hover:text-gray-900">
    E-commerce
  </a>
  
 
  <Link to={'cart'} className="font- rounded-lg px-3 py-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    <img src={cartIcon} alt="cart" className="w-10"/>
  </Link> 

</nav>
    </div>
  )
}

export default Header