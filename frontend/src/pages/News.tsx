import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './News.module.css'

const News = ({ region }: { region: string }) => {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    axios.get(`http://localhost:8000/news/${region}`).then(res => setNews(res.data))
  }, [region])

  return (
    <div className={styles.news}>
      <h1>📰 {region === 'us' ? '美國' : '台灣'} 新聞</h1>
      <ul>
        {news.map((item, idx) => (
          <li key={idx}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News