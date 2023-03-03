import {
  LogoZenemig,
  Github,
  LinkedIn,
  Instagram,
  PhoneIcon,
  EmailIcon,
  HeartIcon,
  ReactIcon
} from '../components/icons'

import layout from '../styles/layout.module.scss'
import leftSidebar from '../styles/leftSidebar.module.scss'

const LeftSidebar = () => {
  return (
    <aside className={layout.leftSidebar}>
      <LogoZenemig className={leftSidebar.logo} />

      <ul className={leftSidebar.socialsList}>
        <li>
          <a href=""><Github /></a>
        </li>
        <li>
          <a href=""><LinkedIn /></a>
        </li>
        <li>
          <a href=""><Instagram /></a>
        </li>
      </ul>

      <h2 className={leftSidebar.position}>Front-End Developer</h2>
      <a className={leftSidebar.company} href="https://satellogic.com">Satellogic</a>

      <ul className={leftSidebar.contactInfo}>
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

      <footer className={leftSidebar.footer}>
        Done with <HeartIcon /> and <a href="https://reactjs.org"><ReactIcon /></a>
      </footer>
    </aside>
  )
}

export default LeftSidebar