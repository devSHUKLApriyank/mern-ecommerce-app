
import React , {useContext} from 'react'
import Title from './Title'
import { Shopcontext } from '../context/Shopcontext'
import ProductItem from './ProductItem'

const LatestCollection = () => {

  const { products } = useContext(Shopcontext)

  const [LatestProducts, setLatestProducts] = React.useState([])

  React.useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [])
   
  return (
    <div className = "my-10">
      <div className = "text-center py-8 text-3xl"> 
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Discover our latest collection of products designed to meet all your needs.</p>
      </div>
      {/* Render the latest products */}
      <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {
          LatestProducts.map((item,index) => (
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
          ))
        }
    </div>
    </div>
  )
}

export default LatestCollection
