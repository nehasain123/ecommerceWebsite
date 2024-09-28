import React from 'react';
import './News.css'; // Create a separate CSS file for styling if needed
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';


const newsData = [
  {
    title: "News Headline 1",
    description: "This is a short description of the first news item.",
    image: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    title: "News Headline 2",
    description: "This is a short description of the second news item.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "News Headline 3",
    description: "This is a short description of the third news item.",
    image: "https://via.placeholder.com/150",
  },
];

const News = () => {
  return (
  <>
    {/* <NewsArticle/> */}
    <Breadcrumb heading="Organic Information" title="News Article"/>
    <div className="news-container">
      <h2>Latest News</h2>
      <div className="news-items">
        {newsData.map((news, index) => (
          <div key={index} className="news-item">
            <img src={news.image} alt={news.title} className="news-image" />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default News;



