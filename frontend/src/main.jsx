import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './MainLayout.jsx'
import AdminLayout from './AdminLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminProductList from './pages/AdminProductList.jsx'
import AdminAddProducts from './pages/AdminAddProducts.jsx'
import AdminEditProduct from './pages/AdminEditProduct.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<MainLayout />}>
      <Route index="true" path='/' element={<HomePage />} />
      <Route path='/category/:id' element={<CategoryPage/>} />
    </Route>
    <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/productlist" element={<AdminProductList />} />
        <Route path="/admin/addproducts" element={<AdminAddProducts />} />
        <Route path="/admin/editproduct/:id" element={<AdminEditProduct/>} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
