import React from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'

const App = () => {
  return (
    <div>
      <>

        <Navbar />
        <hr />
        <div className='flex w-full'>
          <Sidebar />
        </div>
      </>
    </div>

  )
}

export default App
