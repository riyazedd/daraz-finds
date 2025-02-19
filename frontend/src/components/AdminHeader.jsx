import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../API';

const AdminHeader = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await API.post('/api/users/logout');
      localStorage.removeItem('adminToken');
      navigate('/admin');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="text-xl font-medium py-5 px-15 flex justify-between items-center shadow-md">
      <div>
        <Link to="/">Daraz Finds</Link>
      </div>
      <ul className="flex gap-5 items-center">
        <li>
          <Link to="/admin/productlist" className="flex items-center gap-2">Products</Link>
        </li>
        <li>
          <Link to="/admin/categorylist" className="flex items-center gap-2">Category</Link>
        </li>
        <li>
          <button
            onClick={logoutHandler}
            className="p-3 bg-red-500 text-white rounded hover:cursor-pointer"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminHeader;
