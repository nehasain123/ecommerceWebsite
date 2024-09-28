 

 
import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import avatar1 from "./images/avatar1.png";   
import avatar2 from "./images/avatar2.png";   
import avatar3 from "./images/avatar3.png";   
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Saira Hakim",
    position: "Local shop owner",
    image: avatar1,  
    body: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
  },
  {
    name: "David Niph",
    position: "Local shop owner",
    image: avatar2,   
    body: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
  },
  {
    name: "Jacob Sikim",
    position: "Local shop owner",
    image: avatar3,   
    body: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
  }
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,              
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,      
    pauseOnHover: true,      
  };

  return (
    <div className="testimonail-section mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="single-testimonial-slider">
                  <div className="client-avater">
                    <img src={testimonial.image} alt={testimonial.name} />   
                  </div>
                  <div className="client-meta">
                    <h3>{testimonial.name} <span>{testimonial.position}</span></h3>
                    <p className="testimonial-body">
                      "{testimonial.body}"
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
// import React from 'react';
// import Slider from 'react-slick';
// import './Testimonial.css';
// import avatar1 from "./images/avatar1.png";   
// import avatar2 from "./images/avatar2.png";   
// import avatar3 from "./images/avatar3.png";   
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const testimonials = [
//   {
//     name: "Saira Hakim",
//     position: "Local shop owner",
//     image: avatar1,  
//     body: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
//   },
//   {
//     name: "David Niph",
//     position: "Local shop owner",
//     image: avatar2,   
//     body: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
//   },
//   {
//     name: "Jacob Sikim",
//     position: "Local shop owner",
//     image: avatar3,   
//     body: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
//   }
// ];

// const TestimonialSection = () => {
//   const settings = {
//     dots: false,             // Set this to false to remove dots
//     infinite: true,
//     speed: 500,              
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,        
//     autoplaySpeed: 3000,      
//     pauseOnHover: true,      
//   };

//   return (
//     <div className="testimonail-section   container">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-10 offset-lg-1 text-center">
//             <Slider {...settings}>
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="single-testimonial-slider">
//                   <div className="client-avater">
//                     <img src={testimonial.image} alt={testimonial.name} />   
//                   </div>
//                   <div className="client-meta">
//                     <h3>{testimonial.name} <span>{testimonial.position}</span></h3>
//                     <p className="testimonial-body">
//                       "{testimonial.body}"
//                     </p>
//                     <div className="last-icon">
//                       <i className="fas fa-quote-right"></i>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;
