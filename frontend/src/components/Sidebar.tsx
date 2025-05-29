import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = ({ page, setPage }: {
  page: string,
  setPage: (p: string) => void,
}) => {
  return (
    <div className={styles.sidebar}>
      <h2>📈 Finance</h2>
      <div className={styles.navItem} onClick={() => setPage('dashboard')} data-active={page === 'dashboard'}>
        Dashboard
      </div>
      <div className={styles.navItem} onClick={() => setPage('news')} data-active={page === 'news'}>
        News
      </div>
    </div>
  )
}

export default Sidebar
