import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="bg-[#09122C] p-5 sm:p-10 md:p-15 w-full lg:w-[80%] max-w-7xl m-auto rounded-2xl flex flex-col justify-center items-center min-h-screen">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
