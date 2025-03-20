import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/homepage/homepage'
import FavoritesPage from '../pages/favorites/favorites'
import LoginPage from '../pages/Loginpage/Loginpage'
import NotificationsPage from '../pages/notifications/Notifications'
import ProdRegisterPage from '../pages/product-register/ProductRegister'
import ProductsPage from '../pages/products/ProductsPage'
import RegisterPage from '../pages/registerpage/RegisterPage'

const AppRouter = () => {
  return (
    
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/favorites' element={< FavoritesPage/>}/>
    <Route path='/login' element={< LoginPage />}/>
    <Route path='/notifications' element={< NotificationsPage />}/>
    <Route path='/prodregister' element={< ProdRegisterPage />}/>
    <Route path='/prodpage' element={< ProductsPage />}/>
    <Route path='/register' element={< RegisterPage />}/>
</Routes>

  )
}

export default AppRouter