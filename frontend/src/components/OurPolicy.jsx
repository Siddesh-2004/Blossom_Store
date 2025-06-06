import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-8 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-3' alt="Exchange" />
            <p className='mb-2 font-semibold'>INSTANT DELIVERY</p>
            <p className='text-gray-400'>
               DELIVERY WITHIN 6HOURS 
            </p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-3' alt="Exchange" />
            <p className='mb-2 font-semibold'>FRESH FLOWERS</p>
            <p className='text-gray-400'>
               TRANSERENCY OF FRESHNESS
            </p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-3' alt="Exchange" />
            <p className='mb-2 font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>
                We support via email, phone, or chat.
            </p>
        </div>
    </div>
  )
}

export default OurPolicy
