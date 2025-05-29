import React from 'react'
import styles from './Dashboard.module.css'

const Dashboard = ({ region }: { region: string }) => {
  return (
    <div className={styles.dashboard}>
      <h1>📊 {region === 'us' ? '美國' : '台灣'} 投資指標</h1>
      <ul>
        {region === 'us' ? (
          <>
            <li>VIX 恐慌指數</li>
            <li>Put/Call Ratio</li>
            <li>AAII 情緒調查</li>
            <li>CNN Fear & Greed</li>
            <li>NAAIM 曝險指數</li>
          </>
        ) : (
          <>
            <li>融資融券統計</li>
            <li>法人買賣超統計</li>
            <li>期貨未平倉</li>
            <li>大額交易人比</li>
            <li>漲跌家數</li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Dashboard