// import React from 'react';
// import './News.css';
// import newsimge1 from "./News/news-bg-1.jpg";
// import newsimge2 from "./News/news-bg-2.jpg";
// import newsimge3 from "./News/news-bg-3.jpg";
// import newsimge4 from "./News/news-bg-4.jpg";
// import newsimge5 from "./News/news-bg-5.jpg";
// import newsimge6 from "./News/news-bg-6.jpg";
 
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
// import Carousel  from '../../components/Carousel/Carousel';
 

// const NewsCard = ({ image, title, author, date, text }) => {
//   return (
//     <div className="card">
//       <img src={image} className="card-img-top" alt={title} />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <div className="card-meta my-4">
//           <span className='pe-3'><i className="fa fa-user"></i> {author}</span>
//           <span><i className="fa fa-calendar"></i> {date}</span>
//         </div>
//         <p className="card-text">{text}</p>
//         <a href="#" className="btn btn-link p-0">read more &gt;</a>
//       </div>
//     </div>
//   );
// };


// const News = () => {
//   const newsItems = [
//     {
//       image: newsimge1,
//       title: "You will vainly look for fruit on it in autumn.",
//       author: "Admin",
//       date: "27 December, 2019",
//       text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
//     },
//     {
//       image: newsimge2,
//       title: "A man's worth has its season, like tomato.",
//       author: "Admin",
//       date: "27 December, 2019",
//       text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
//     },
//     {
//       image: newsimge3,
//       title: "Good thoughts bear good fresh juicy fruit.",
//       author: "Admin",
//       date: "27 December, 2019",
//       text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
//     },
//     {
//       image: newsimge4,
//       title: "Good thoughts bear good fresh juicy fruit.",
//       author: "Admin",
//       date: "27 December, 2019",
//       text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
//     },
//     {
//       image: newsimge5,
//       title: "Good thoughts bear good fresh juicy fruit.",
//       author: "Admin",
//       date: "27 December, 2019",
//       text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
//     },
//     {
//       image: newsimge6,
//       title: "Good thoughts bear good fresh juicy fruit.",
//       author: "Admin",
//       date: "27 December, 2019",
//       text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
//     }

//   ];

//   return (
//     <>

//       <Breadcrumb heading=" Organic Information" title="News Article" />
//       <div className="container mb-5  ">


//         <div className="row d-flex justify-content-center images-main-section   ">
//           {newsItems.map((item, index) => (
//             <div className="col-md-4 pb-5" key={index}>
//               <NewsCard
//                 image={item.image}
//                 title={item.title}
//                 author={item.author}
//                 date={item.date}
//                 text={item.text}
//               />
//             </div>
//           ))}
//         </div>
          
        
//       </div>
//       <Carousel/>
//     </>
//   );
// };

// export default News;

import React from 'react';
import './News.css';
import newsimge1 from "./News/news-bg-1.jpg";
import newsimge2 from "./News/news-bg-2.jpg";
import newsimge3 from "./News/news-bg-3.jpg";
import newsimge4 from "./News/news-bg-4.jpg";
import newsimge5 from "./News/news-bg-5.jpg";
import newsimge6 from "./News/news-bg-6.jpg";

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Carousel from '../../components/Carousel/Carousel';

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
      image: newsimge4,
      title: "Good thoughts bear good fresh juicy fruit.",
      author: "Admin",
      date: "27 December, 2019",
      text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
    },
    {
      image: newsimge5,
      title: "Good thoughts bear good fresh juicy fruit.",
      author: "Admin",
      date: "27 December, 2019",
      text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
    },
    {
      image: newsimge6,
      title: "Good thoughts bear good fresh juicy fruit.",
      author: "Admin",
      date: "27 December, 2019",
      text: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros."
    }
  ];

  return (
    <>
      <Breadcrumb heading="Organic Information" title="News Article" />
      <div className="container mb-5">
        <div className="row d-flex justify-content-center images-main-section">
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
        
        {/* Pagination Design */}
        <div className="pagination-wrap">
          <ul>
            <li><a href="#">Prev</a></li>
            <li><a href="#">1</a></li>
            <li><a className="active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">Next</a></li>
          </ul>
        </div>

      </div>
      <Carousel />
    </>
  );
};

export default News;
