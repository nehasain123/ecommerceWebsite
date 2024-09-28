import React from 'react';
import "./About.css";  
import Carousel  from "../../components/Carousel/Carousel" ;
import ShopBanner from "../../components/ShopBanner/ShopBanner"
import TestimonialSection from "../../components/TestimonialSection/Testimonials "
import TeamSection from '../TeamSection/TeamSection';
import "../../assets/responsive.css"
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function Cart() {
  return (
    <>
    <Breadcrumb heading="We sale fresh fruits" title="About Us"/>
    <div className="feature-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="featured-text">
            <h2 class="section-title text-start">Why <span>Fruitkha</span></h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <div className="content">
                      <h3>Home Delivery</h3>
                      <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-money-bill-alt"></i>
                    </div>
                    <div className="content">
                      <h3>Best Price</h3>
                      <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="content">
                      <h3>Custom Box</h3>
                      <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-sync-alt"></i>
                    </div>
                    <div className="content">
                      <h3>Quick Refund</h3>
                      <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <ShopBanner/>
      <TeamSection/>
      <TestimonialSection/>
     
      <Carousel/>
    </>
  );
}

export default Cart;
