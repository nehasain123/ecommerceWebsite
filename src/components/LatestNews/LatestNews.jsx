// import React from 'react';
// import './LatestNews.css';  
// import newsimge1 from "./images/news-bg-1.jpg"
// import newsimge2 from "./images/news-bg-2.jpg"
// import newsimge3 from "./images/news-bg-3.jpg"
// const LatestNews = () => {
//   return (
//     <div className="container mt-5">
//    <h2 class="section-title text-center">Our <span>News</span></h2>
//       <p className="text-center text-muted pt-2 pb-5">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, fuga quas itaque eveniet beatae optio.
//       </p>

//       <div className="row d-flex justify-content-center images-main-section">
//         <div className="col-md-4">
//           <div className="card">             
//             <img src={newsimge1} className="card-img-top" alt="Strawberries" />
//             <div className="card-body">
//               <h5 className="card-title">You will vainly look for fruit on it in autumn.</h5>
//               <div className="card-meta my-4">
//                 <span className='pe-3'><i className="fa fa-user"></i> Admin</span>
//                 <span><i className="fa fa-calendar"></i> 27 December, 2019</span>
//               </div>
//               <p className="card-text">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
//               <a href="#" className="btn btn-link p-0">read more &gt;</a>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card">
//             <img src={newsimge2} className="card-img-top" alt="Fruit Salad" />
//             <div className="card-body">
//               <h5 className="card-title">A man's worth has its season, like tomato.</h5>
//               <div className="card-meta my-4">
//                 <span className='pe-3  '><i className="fa fa-user"></i> Admin</span>
//                 <span><i className="fa fa-calendar"></i> 27 December, 2019</span>
//               </div>
//               <p className="card-text">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
//               <a href="#" className="btn btn-link p-0">read more &gt;</a>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card">
//             <img src={newsimge3} className="card-img-top" alt="Grapes" />
//             <div className="card-body">
//               <h5 className="card-title">Good thoughts bear good fresh juicy fruit.</h5>
//               <div className="card-meta my-4">
//                 <span className='pe-3' ><i className="fa fa-user"></i> Admin</span>
//                 <span><i className="fa fa-calendar"></i> 27 December, 2019</span>
//               </div>
//               <p className="card-text">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
//               <a href="#" className="btn btn-link p-0">read more &gt;</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="Add-Cart-btn text-center py-5"><a href="#" class="btn btn-warning fw-2">  More News</a></div>
//     </div>
//   );
// };

// export default LatestNews;

 
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

      <div className="row d-flex justify-content-center images-main-section">
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
