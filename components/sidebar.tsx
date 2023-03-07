import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  LogoZenemig,
  Github,
  LinkedIn,
  Instagram,
  PhoneIcon,
  EmailIcon,
  HeartIcon,
  ReactIcon
} from './icons'

import layout from '../styles/layout.module.scss'
import sidebar from '../styles/sidebar.module.scss'

const Sidebar = () => {
  const path = useRouter().pathname

  return (
    <aside className={layout.sidebar}>
      <LogoZenemig className={sidebar.logo} />

      <ul className={sidebar.socialsList}>
        <li>
          <a href="https://github.com/zenemig"><Github /></a>
        </li>
        <li>
          <a href="https://linkedin.com/in/zenemig"><LinkedIn /></a>
        </li>
        <li>
          <a href="https://instagram.com/zenemig"><Instagram /></a>
        </li>
      </ul>

      <h2 className={sidebar.position}>Front-End Developer</h2>
      <a className={sidebar.company} href="https://satellogic.com">Satellogic</a>

      <ul className={sidebar.navigation}>
        <li className={path === '/' ? sidebar.active : ''}>
          <Link href='/'>Work</Link>
        </li>
        <li className={path === '/photography' ? sidebar.active : ''}>
          <Link href='/photography'>Photography</Link>
        </li>
      </ul>

      <ul className={sidebar.contactInfo}>
        <li>
          <a href="tel:+56985006191">
            <PhoneIcon />
            +56 9 8500 6191
          </a>
        </li>
        <li>
          <a href="mailto:hola@zenemig.net">
            <EmailIcon />
            hola@zenemig.net
          </a>
        </li>
      </ul>

      <footer className={sidebar.footer}>
        Done with <HeartIcon /> and <a href="https://reactjs.org"><ReactIcon /></a>
      </footer>
    </aside>
  )
}

export default Sidebar