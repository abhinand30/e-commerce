import { Route, Routes } from "react-router-dom"

import AdminHome from "./pages/admin/AdminHome"
import ProductPage from "./pages/admin/ProductPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import UserHome from "./pages/user/UserHome"
import CartPage from "./pages/user/CartPage"
import ProtectedRoute from "./route/ProtectedRoute"
import UsersPage from "./pages/admin/UsersPage"
import OrderListPage from "./pages/admin/OrderListPage"


function App() {
 
 
  return (
    <>
      <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />

      {/* admin */}
         <Route path='/admin' element={<ProtectedRoute roles={'admin'}><AdminHome/></ProtectedRoute>} />
         <Route path='admin/products' element={<ProtectedRoute roles={'admin'}><ProductPage/></ProtectedRoute>} />
         <Route path='admin/users' element={<ProtectedRoute roles={'admin'}><UsersPage/></ProtectedRoute>} />
         <Route path='admin/orders' element={<ProtectedRoute roles={'admin'}><OrderListPage/></ProtectedRoute>} />

      {/* user */}
      <Route path='/user'element={<ProtectedRoute roles={'user'}><UserHome/></ProtectedRoute>} />
      <Route path="/user/cart"element={<ProtectedRoute roles={'user'}><CartPage/></ProtectedRoute>}/>
     
       </Routes>
  
    
    </>
  )
}


export default App
