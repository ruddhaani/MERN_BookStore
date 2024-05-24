import React from 'react'
import Navbar from './Navbar'
import list from '../../public/list.json'
import Cards from './Cards'

function Course() {
  return (
    <>
    <div>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className=' text-pink-500'>here :)</span></h1>
            <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-2'>
            { 
            list.map((item)=>(
                <Cards item = {item} key={item.id} />
            ))
            }
        </div>
    </div>    
    </div>
    </>
  )
}

export default Course