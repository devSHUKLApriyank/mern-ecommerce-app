import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className="mb-5 w-32" alt="logo" />
            <p className="w-full md:w-2/3 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa vitae adipisci iusto quo! Hic quo quisquam doloremque fuga aliquam animi possimus ipsam.</p>
        </div>
        <div>
          <p className="font-medium text-xl text-gray-800 mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li className="text-gray-500 hover:text-black cursor-pointer">Home</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">About us</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Delivery</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-xl text-gray-800 mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li className="text-gray-500 hover:text-black cursor-pointer"> info@yourcompany.com</li>
            <li className="text-gray-500 hover:text-black cursor-pointer"> +1 (123) 456-7890</li>
            <li className="text-gray-500 hover:text-black cursor-pointer"> 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-sm py-5">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  )
}
export default Footer