import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import News from './pages/News'
import styles from './App.module.css'

const App = () => {
  const [page, setPage] = useState('dashboard')
  const [region, setRegion] = useState(() => localStorage.getItem('region') || 'us')

  useEffect(() => {
    localStorage.setItem('region', region)
  }, [region])

  return (
    <div className={styles.appContainer}>
      <Sidebar page={page} setPage={setPage} />
      <main className={styles.mainContent}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
          <label>地區：</label>
          <select value={region} onChange={e => setRegion(e.target.value)}>
            <option value="us">美國</option>
            <option value="tw">台灣</option>
          </select>
        </div>
        {page === 'dashboard' && <Dashboard region={region} />}
        {page === 'news' && <News region={region} />}
      </main>
    </div>
  )
}

export default App