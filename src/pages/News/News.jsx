// import React from 'react';
// import './News.css'; // Create a separate CSS file for styling if needed
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';


// const newsData = [
//   {
//     title: "News Headline 1",
//     description: "This is a short description of the first news item.",
//     image: "https://via.placeholder.com/150", // Replace with actual image URLs
//   },
//   {
//     title: "News Headline 2",
//     description: "This is a short description of the second news item.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "News Headline 3",
//     description: "This is a short description of the third news item.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "News Headline 3",
//     description: "This is a short description of the third news item.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "News Headline 3",
//     description: "This is a short description of the third news item.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "News Headline 3",
//     description: "This is a short description of the third news item.",
//     image: "https://via.placeholder.com/150",
//   },
// ];

// const News = () => {
//   return (
//   <>

//     <Breadcrumb heading="Organic Information" title="News Article"/>
//     <div className="news-container">
//       <h2>Latest News</h2>
//       <div className="news-items">
//         {newsData.map((news, index) => (
//           <div key={index} className="news-item">
//             <img src={news.image} alt={news.title} className="news-image" />
//             <h3>{news.title}</h3>
//             <p>{news.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </>
//   );
// };

// export default News;





import React from 'react';
import './News.css';
import newsimge1 from "./News/news-bg-1.jpg";
import newsimge2 from "./News/news-bg-2.jpg";
import newsimge3 from "./News/news-bg-3.jpg";
import Button from '../../components/Button/Button';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

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


const News = () => {
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
    },
    {
      image: newsimge3,
      title: "Good thoughts bear good fresh juicy fruit.",
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
    <>

      <Breadcrumb heading=" Organic Information" title="News Article" />
      <div className="container mb-5  ">


        <div className="row d-flex justify-content-center images-main-section   ">
          {newsItems.map((item, index) => (
            <div className="col-md-4 pb-5" key={index}>
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
          <Button textKey="MoreNews" type="link" link="/cart" className="btn-warning" />
        </div>
      </div>
    </>
  );
};

export default News;
