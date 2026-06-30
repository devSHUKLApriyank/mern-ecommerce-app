import React from 'react'
import Title from '../component/Title'
import NewsletterBox from '../component/NewsletterBox'
import { assets } from '../assets/assets';



const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We are a passionate team dedicated to creating innovative solutions that make a difference. Founded in 2015, our company has grown from a small startup into a trusted name in the industry, serving thousands of customers worldwide.</p>
          <p> Integrity, innovation, and customer satisfaction guide everything we do. We strive to build lasting relationships based on trust and transparency, ensuring that every interaction reflects our commitment to excellence.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is simple: to deliver exceptional value through quality products and outstanding service. We believe in the power of collaboration, creativity, and continuous improvement. Every member of our team brings unique skills and perspectives, working together to push boundaries and exceed expectations. </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>At the heart of everything we do is an unwavering commitment to quality. Our rigorous quality assurance processes ensure that every product and service we deliver meets the highest industry standards, giving our customers confidence and peace of mind.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Whether you're a longtime customer or just discovering us, we're glad you're here. Reach out anytime, we'd love to hear from you.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>We employ a multi-step testing and verification process at every stage of development. From initial design through final delivery, our dedicated QA team conducts thorough inspections, performance evaluations, and compliance checks to identify and resolve any issues before they reach our customers.</p>
       </div>
      </div>

       <NewsletterBox />


    </div>
  )
}

export default about
