import styles from './Navbar.module.css'
import { ActiveLink } from "./ActiveLink"

export const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({text, href}) => (
          <ActiveLink key={href} text={text} href={href} />
        ))
      }
        {/* 
        <ActiveLink text='Home' href='/' />
        <ActiveLink text='About' href='/about' />
        <ActiveLink text='Contact' href='/contact' />
        <ActiveLink text='Pricing' href='/pricing' /> 
        */}
      </nav>
  )
}
