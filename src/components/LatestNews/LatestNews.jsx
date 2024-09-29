 
import React from 'react';
import './LatestNews.css';  
import newsimge1 from "./images/news-bg-1.jpg";
import newsimge2 from "./images/news-bg-2.jpg";
import newsimge3 from "./images/news-bg-3.jpg";
import Button from '../Button/Button';
 
const NewsCard = ({ image, title, author, date, text }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-meta my-4">
          <span className='pe-3'><i className="fa fa-user"></i> {author}</span>
          <span><i className="fa fa-calendar"></i> {date}</span>
        </div>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-link p-0">read more &gt;</a>
      </div>
    </div>
  );
};

 
const LatestNews = () => {
  const newsItems = [
    {
      image: newsimge1,
      title: "You will vainly look for fruit on it in autumn.",
      author: "Admin",
      date: "27 December, 2019",
      text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
    },
    {
      image: newsimge2,
      title: "A man's worth has its season, like tomato.",
      author: "Admin",
      date: "27 December, 2019",
      text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
    },
    {
      image: newsimge3,
      title: "Good thoughts bear good fresh juicy fruit.",
      author: "Admin",
      date: "27 December, 2019",
      text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="section-title text-center">Our <span>News</span></h2>
      <p className="text-center text-muted pt-2 pb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, fuga quas itaque eveniet beatae optio.
      </p>

      <div className="row d-flex justify-content-center image-main-section">
        {newsItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <NewsCard 
              image={item.image}
              title={item.title}
              author={item.author}
              date={item.date}
              text={item.text}
            />
          </div>
        ))}
      </div>

      <div className="Add-Cart-btn text-center mt-5">
          <Button textKey="MoreNews" type="link" link="/cart"   className="btn-warning" />
        </div>
    </div>
  );
};

export default LatestNews;
