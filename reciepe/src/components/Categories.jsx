import React from 'react'
import {categories} from '../data/data'

const Categories = () => {
    console.log(categories);
  return (
      <>
          <div className='max-w-[1520px] m-auto px-4 py-12'>
              <h1 className='text-orange-500 font-bold text-3xl text-center py-2 mb-4'>Trending Categories</h1>
              <div className='grid grid-cols-2 md:grid-cols-6 gap-6 py-5 px-2'>
                  {categories.map((item) =>(
                      <div  key={item.id} className='p-4 flex justify-center items-center hover:scale-105 duration-300'>
                          <img src={item.image} alt={item.name} />
                      </div>
                 ))}
              </div>
          </div> 
      </>
  )
}

export default Categories
