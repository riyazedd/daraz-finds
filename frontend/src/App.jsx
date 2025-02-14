import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
      <>
        <div className='bg-[#09122C] p-15 w-auto m-20 rounded-4xl flex flex-col items-center h-auto'>
        <Header />
        <div className='mt-10'>
          <Outlet />  
        </div>
        </div>
      </>
    )
}

export default App