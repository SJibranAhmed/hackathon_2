import { Mail } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const Subscribe = () => {
  return (
    <main className=' flex justify-center relative top-24'>
        <div className="container flex flex-col md:flex-row gap-10 py-10 px-5  justify-center bg-black/90 text-white w-[80%] max-md:w-[95%] md:h-[200px] rounded-3xl">
            <div className="leftSide h-full md:w-[55%] ">
                <h1 className='text-[40px] max-md:text-[32px] max-md:leading-9  font-extrabold p-2 max-md:p-0 leading-10 uppercase'> stay upto date about our latest offers</h1>
            </div>
            <div className="leftSide flex  flex-col gap-3 h-full md:w-[35%] p-2">
                <div className="input flex justify-center items-center px-6 bg-white max-md:placeholder:text-[14px] text-black w-full h-[50px] rounded-full">
                   <Mail/> <input type="email" placeholder='Enter your email address' className='outline-none w-full h-full p-2' />
                </div>
                <div className="input flex justify-center items-center bg-white text-black w-full h-[50px] rounded-full">
                   <Button className='w-full h-full rounded-full' variant={'secondary'}>Subscribe to Newsletter</Button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Subscribe