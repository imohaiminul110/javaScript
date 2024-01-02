import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsBoard = () => {

    const [articles, setArticles] = useState([])


    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}')
        .then(res=> setArticles(res.data) )
        .catch(err => console.log(err))
    }, [])

    



  return (
    <div>
      <h2 className='text-center'> Latest <span className='badge bg-danger' >News</span> </h2>

      {articles.map((news,index) =>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      } )}
    </div>
  )
}

export default NewsBoard
