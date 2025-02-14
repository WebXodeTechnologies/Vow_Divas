import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className='relative space-y-20 flex justify-center flex-col overflow-clip mx-auto sm:px-10 px-5 bg-white dark:bg-black'>
      <div className='w-full'>
        <Navbar/>
      </div>
    </main>
  )
}

export default page