import React from 'react'
import Hero from '../component/Hero'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function home() {
  return (
    <div>
      <Hero/> 
      <LatestCollection/>
      <BestSeller/>
    </div>
  )
}

export default home
