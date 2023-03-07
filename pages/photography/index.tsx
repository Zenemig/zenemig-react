import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

import layout from '../../styles/layout.module.scss'

const Photography = () => {
  return (
    <div className={layout.container}>
      <Sidebar />

      <main className={layout.content}>
        <Header />

        <h2>Photography</h2>
      </main>
    </div>
  )
}

export default Photography
