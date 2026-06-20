import React, { useContext, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'

const cart = () => {

  const {products, currency, cartItems} = useContext(Shopcontext);

  const [cartData,setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if (cartItems[items][item] > 0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    console.log(tempData);
  },[cartItems])


  return (
    <div className=''>
      
    </div>
  )
}

export default cart
