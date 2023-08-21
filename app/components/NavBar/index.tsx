import Link from 'next/link'
import React from 'react'
import './index.scss'

const NavBar = () => {
  return (
    <div className='navigation'>
      <Link href={'/'} className='navigation__elem'>
        Home
      </Link>
      <Link href={'/drinks'} className='navigation__elem'>
        Drinks
      </Link>
    </div>
  )
}

export default NavBar