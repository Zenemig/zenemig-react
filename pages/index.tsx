import Image from 'next/image'

import styles from '../styles/layout.module.scss'

import logoZenemig from '../public/logo_zenemig.svg'

const Home = () => {
  return (
    <Image
      alt="Zenemig Logo"
      priority
      src={logoZenemig}
    />
  )
}

export default Home
