import React from 'react'
import RentUrbania from './RentUrbania'
import TopServices from './TopServices'
import ServiceArea from './ServiceArea'
import ServicesBanner from './ServicesBanner '
import UrbaniaRateCard from './UrbaniaRateCard'

const Services = () => {
  return (
    <>
    <ServicesBanner/>
    <div className='bg-gradient-to-br from-black/90 via-[#c40707] to-black/90 text-white' >
      
      <UrbaniaRateCard/>
      <TopServices/>
      <RentUrbania/>
      <ServiceArea/>
    </div>
    </>
  )
}

export default Services
