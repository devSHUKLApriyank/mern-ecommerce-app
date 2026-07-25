import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './component/Login'
import { ToastContainer, toast } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(() => {
    localStorage.setItem('token',token)
  }, [token])


  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />

      {token === "" ? <Login setToken={setToken} />
        :
        <>

          <Navbar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Order />} />
              </Routes>
            </div>
          </div>
        </>}

    </div>

  )
}

export default App
