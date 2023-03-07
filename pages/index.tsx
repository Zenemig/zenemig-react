import Sidebar from '../components/sidebar'
import Header from '../components/header'

import layout from '../styles/layout.module.scss'

const Home = () => {
  return (
    <div className={layout.container}>
      <Sidebar />

      <main className={layout.content}>
        <Header />

        <h2>Work</h2>
      </main>
    </div>
  )
}

export default Home
