import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(Shopcontext)

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-105 transition ease-in-out w-full"
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='font-medium text-sm'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem