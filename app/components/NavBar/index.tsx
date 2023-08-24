import Link from 'next/link'
import React from 'react'
import './index.scss'

const links = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/drinks',
    label: 'Drinks'
  },
  {
    href: '/food',
    label: 'Food'
  },
]

const NavBar = () => {
  return (
    <div className='navigation'>
      {links.map(link => (
      <Link key={link.href} href={link.href} className='navigation__elem'>
        {link.label}
      </Link>
      ))}
    </div>
  )
}

export default NavBar