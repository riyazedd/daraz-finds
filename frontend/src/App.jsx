import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-[#09122C] p-5 sm:p-10 md:p-15 w-full lg:w-[80%] max-w-7xl m-auto rounded-2xl flex flex-col items-center min-h-screen">
        <Header />
        <div className="mt-10 w-full px-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
