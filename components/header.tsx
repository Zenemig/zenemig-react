import Link from 'next/link'

import header from '../styles/header.module.scss'

const Header = () => {
  const getAge = (dayBorn: number, monthBorn: number, yearBorn: number) => {
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const currentDay = date.getDate()
    if (currentMonth - monthBorn < 0) {
      return currentYear - yearBorn - 1
    }
    if (currentMonth === monthBorn && currentDay - dayBorn < 0) {
      return currentYear - yearBorn
    }
    return currentYear - yearBorn
  }

  return (
    <header className={header.headline}>
      <h1>Hi, I&apos;m Matías Giménez, from Chile</h1>
      <p>Father to Amelia ({getAge(26, 2, 2009)}) and Lucca ({getAge(30, 12, 2015)}), <Link href="/">Front-End Developer</Link> and <Link href="/photography">amateur photographer</Link>.</p>
    </header>
  )
}

export default Header