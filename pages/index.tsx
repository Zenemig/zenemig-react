import LeftSidebar from '../components/leftSidebar'

import layout from '../styles/layout.module.scss'

const Home = () => {
  return (
    <div className={layout.container}>
      <LeftSidebar />

      <main className={layout.content}>
        <p>Content</p>
      </main>

      <aside className={layout.rightSidebar}>
        <p>Instagram</p>
      </aside>
    </div>
  )
}

export default Home
