import { Route, Routes } from "react-router-dom"

import AdminHome from "./pages/admin/AdminHome"
import ProductPage from "./pages/admin/ProductPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import UserHome from "./pages/user/UserHome"
import CartPage from "./pages/user/CartPage"

function App() {
 

  return (
    <>
      <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
         <Route path='/admin' element={<AdminHome/>} />
         <Route path='/products' element={<ProductPage/>} />
      <Route path='/user'element={<UserHome/>} />
      <Route path="/user/cart" element={<CartPage/>}/>
     
       </Routes>
  
    
    </>
  )
}


export default App
