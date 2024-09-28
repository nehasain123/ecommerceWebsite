 
//https://www.youtube.com/watch?v=K70vv1XNUww
// export default AboutSection;

import React from 'react';
import './Advertisement.css';  
import aboutImage from './images/abt.jpg';  


const AboutSection = () => {
  return (
    <div className="abt-section mb-5 mt-5"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="abt-bg" style={{ backgroundImage: `url(${aboutImage})` }}>
              <a href="https://www.youtube.com/watch?v=K70vv1XNUww" className="video-play-btn popup-youtube">
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="abt-text">
              <p className="top-sub">Since Year 1999</p>
              <h2 className="section-title text-start">
                We are <span>Fruitkha</span>
              </h2>
              <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
