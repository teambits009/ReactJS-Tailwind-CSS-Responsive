import React from 'react'

const Newsletter = () => {
  return (
    <div className= 'w-ful py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow? </h1>
                <p>Sign Up to Our Newsletter and Stay Up to Date.</p>
            </div>
            <div className='my-4'>
                </div>

            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me. </button>

             </div>
        </div>
      
    </div>
  )
}

export default Newsletter
