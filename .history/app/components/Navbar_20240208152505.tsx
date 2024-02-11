import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full mx-auto max-w-2xl px-4 py-5 relative flex items-center justify-between'>
        <Link href='/' className='font-bold text-3xl'>
            Oscar NextJS <span className='text-blue-500'>Blog</span></Link>
    </nav>
  )
}

export default Navbar