import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'


const List = ({token}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products) // use the actual array key from your API
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error("Error fetching list:", error)
      toast.error("Failed to fetch list. Please try again later.")
    }
  }

  const removeProduct = async (id) => {
  try {
    const response = await axios.post(backendUrl + "/api/product/remove", 
      { id },
      { headers: { token } }
    )

    if (response.data.success) {
      toast.success(response.data.message)
      await fetchList();
    } else {
      toast.error(response.data.message)
    }
  } catch (error) {
    console.error("Error removing product:", error)
    toast.error("Failed to remove product. Please try again later.")
  }
}
     
  useEffect(() => {
    fetchList()
  }, [])



  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className='flex flex-col gap-2'>
        {/*-----------List Table Title-------------*/}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 test-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {/*-----------Product List------------ */}
        {
          list.map((item, index) => (
            <div
              key={index}
              className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
            >
              <img src={item.images?.[0]} alt={item.name} className='w-12' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p> 
              <p onClick={()=>removeProduct(item._id)} className='md:text-center text-right text-lg cursor-pointer'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
