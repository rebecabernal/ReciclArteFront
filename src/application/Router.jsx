import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/homepage/Homepage'
import LoginPage from '../pages/Loginpage/Loginpage'
import ProdRegisterPage from '../pages/product-register/ProductRegister'
import RegisterPage from '../pages/registerpage/RegisterPage'

const AppRouter = () => {
  return (
    
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={< LoginPage />}/>
    <Route path='/prodregister' element={< ProdRegisterPage />}/>
    <Route path='/register' element={< RegisterPage />}/>
</Routes>

  )
}

export default AppRouter