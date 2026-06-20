import React, { useEffect } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useContext, useState } from 'react';
import Title from './Title'
import ProductsItem from './ProductItem'

const RelatedProducts = ({category,subCategory}) => {

    const { products } = useContext(Shopcontext);
    const [related,setRelated] = useState([]);

    useEffect(() => {
    if (products.length > 0) {
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item) => category === item.category);
        productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
        setRelated(productsCopy.slice(0, 5));
    }
}, [products, category, subCategory])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1 ={'RELATED'} text2 = {'PRODUCT'} />
        </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {related.map((item,index)=>(
            <ProductsItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
