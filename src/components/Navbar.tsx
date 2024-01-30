import React from 'react'
import { MdSunnySnowing } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <nav className='shadow-sm sticky top-0 
        left-0 z-50 bg-black text-white'>
      <div className='h-[80px] w-full flex justify-between 
            items-center max-w-7xl px-3 mx-auto'>
        <p className='flex items-center justify-center gap-2'>
          <span className='text-gray-400 text-3xl'>Weather</span>
          <MdSunnySnowing className='text-3xl mt-1 text-yellow-300'/>
        </p>
        <section className='flex gap-2 items-center'>
          <IoMdLocate className='text-2xl text-gray-400 hover:opacity-60 cursor-pointer' />
          <MdOutlineLocationOn className="text-3xl" />
          <p className='text-slate-900/80 text-sm'>France</p>
          <div>
            <SearchBox/>
          </div>
        </section>
      </div>
    </nav>
  )
}
