import React from 'react'
import { news } from '../datas/news'
import '../assets/css/newsCard.css'


const NewsCard = () => {
    // console.log(news);
  return (
    <section className='recent-news-layer'>
    <div className='recent-news-heading'>
        <h1>Recent News</h1>
        <span>Lorem ipsum dolor, sit amet consectetur</span>
    </div>
    <div className='recent-card-wrapper'>
       {news.map((item)=>{
        return (<div key={item.id} className='recent-news-card'>
            <img src={item.img} loading='lazy'/>
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div> )
       })} 
        
    </div>
   {/* <Footer/> */}
    </section>
  )
}

export default NewsCard