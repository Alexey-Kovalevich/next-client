
import Link from 'next/link'
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
  {
    href: '/sign-in',
    label: 'Sign in'
  },
  {
    href: '/api/auth/signout',
    label: 'Sign out'
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