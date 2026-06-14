import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around text-center py-20 sm:gap-2 gap-10 text-xs sm:text-sm md:text-base text-gray-700">
      
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange" />
        <p className="font-semibold">Exchange Policy</p>
        <p className="text-gray-500">Exchange items within 30 days of purchase.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Quality" />
        <p className="font-semibold">Quality Policy</p>
        <p className="text-gray-500">We guarantee the quality of all our products.</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Support" />
        <p className="font-semibold">Support Policy</p>
        <p className="text-gray-500">Our support team is available 24/7 to assist you.</p>
      </div>
    </div>
      
  )
}

export default OurPolicy
