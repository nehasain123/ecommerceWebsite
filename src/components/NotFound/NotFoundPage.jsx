import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Carousel from "../../components/Carousel/Carousel";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import "./NotFoundPage.css";
import Button from "../../components/Button/Button";
const NotFoundPage = () => {
  return (
    <>
      <Breadcrumb heading=" Fresh adn Organic" title="404 - Not Found" />
      <div className="full-height-section error-section  ">
        <div className="full-height-tablecell d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="error-text">
                  <i class="far fa-sad-cry"></i>
                  <h1>Oops! Not Found.</h1>
                  <p>The page you requested for is not found.</p>
                  <div className="Add-Cart-btn">
                    <Button textKey="BackHome" type="link" link="/" className="btn-warning" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
};

export default NotFoundPage;