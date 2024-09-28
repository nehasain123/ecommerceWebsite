import React from 'react';
import "./TeamSection.css";  

const TeamSection = () => {
  return (
    <div className="mt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
            <h2 class="section-title text-center">Our <span>Team</span></h2>
                 
            </div>
            <p className='team-tittle' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                <br />
                 fuga quas itaque eveniet beatae optio.</p>  
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-team-item">
              <div className="team-bg team-bg-1"></div>
              <h4>Jimmy Doe <span>Farmer</span></h4>
              <ul className="social-link-team">
                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-team-item">
              <div className="team-bg team-bg-2"></div>
              <h4>Marry Doe <span>Farmer</span></h4>
              <ul className="social-link-team">
                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="single-team-item">
              <div className="team-bg team-bg-3"></div>
              <h4>Simon Joe <span>Farmer</span></h4>
              <ul className="social-link-team">
                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
