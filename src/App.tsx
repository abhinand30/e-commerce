import { Route, Routes } from "react-router-dom"

import AdminHome from "./pages/admin/AdminHome"
import ProductPage from "./pages/admin/ProductPage"

function App() {
 

  return (
    <>
      <Routes>
         <Route path='/' element={<AdminHome/>} />
         <Route path='/products' element={<ProductPage/>} />
       </Routes>
  
    
    </>
  )
}


export default App
