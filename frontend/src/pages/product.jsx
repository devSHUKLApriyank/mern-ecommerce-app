import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext';

const Product = () => {  // ← Also fixed: component name must be PascalCase

  const { productId } = useParams();
  const { products } = useContext(Shopcontext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);  // set default image
        return null;
      }
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);  // ← added `products` as dependency

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">

          {/* Thumbnail column */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)} 
                src={item}
                key={index}
                className={`w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer
                  ${image === item ? 'border-2 border-orange-500' : ''}`} 
                alt=""
              />
            ))}
          </div>

        
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt={productData.name} />
          </div>
          {/*------Product Info------------ */}
        </div>

      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product  // ← PascalCase export too
