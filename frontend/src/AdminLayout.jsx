import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";

const AdminLayout = () => {
  return (
    <>
    <AdminHeader />
    <div className="w-full p-10">
      <Outlet />
    </div>
    </>
  );
};

export default AdminLayout;
