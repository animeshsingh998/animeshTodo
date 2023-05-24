import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav className='w-full bg-slate-800 flex justify-between h-[60px] items-center px-[30px]'>
          <h1 className='text-slate-100 text-2xl '>Animesh TODO</h1>
          <Link href='/new' className='btn-primary'>New</Link>
    </nav>
  )
}

export default Navbar