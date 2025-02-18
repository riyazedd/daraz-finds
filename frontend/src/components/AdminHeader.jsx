import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div>
      <nav className='text-xl font-medium py-5 px-15 flex justify-between items-center shadow-md'>
        <div>
            <p> <a href="/"> Daraz Finds </a> </p>
        </div>
        <div>
            <ul className='flex gap-5'>
                <li> <a href="/admin/productlist" className='flex items-center gap-2'>Products</a> </li>
                <li > <a href="/admin/category" className='flex items-center gap-2'>Category</a> </li>
                <li > <button className=''>Logout</button> </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default AdminHeader
