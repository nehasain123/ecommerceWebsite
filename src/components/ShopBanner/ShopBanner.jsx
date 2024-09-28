import React from 'react';
import './ShopBanner.css';   
import Button from '../Button/Button';   

const ShopBanner = () => {
  return (
    <section className="shop-banner  ">
      <div className="container">
      <h3 className="section-title text-start">December sale is on! <br />with big <span>Discount...</span></h3>
        <div className="sale-percent">
          <span>Sale! <br /> Upto</span> 50% <span>off</span>
        </div>
        <div className="Add-Cart-btn">
          <Button textKey="ShopNow" type="link" link="#"   className="btn-warning" />
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
