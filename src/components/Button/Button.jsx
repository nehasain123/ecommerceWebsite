import React from 'react';
import './Button.css';

const buttonTexts = {
  addToCart: "Add to Cart",
  MoreNews: "More News",
  checkout: "Checkout",
  ShopNow :"Shop Now",
  fruitCollection: "Fruit Collection",  
  contactUs: "Contact Us",  
  BackHome: "Back to Home",  
  updatecart: "Update Cart",  
  checkout: "Checkout",  
  apply : "Apply",
  PlaceOrder: "Place Order",           
};

const Button = ({ textKey, type, link, icon, className, onClick }) => {
  const text = buttonTexts[textKey];  

  if (type === 'btn') {
    return (
      <button className={`btn ${className}`} onClick={onClick}>
        {icon && <i className={`fa-solid fa-${icon}`}></i>} {text}
      </button>
    );
  } else if (type === 'link') {
    return (
      <a href={link} className={`btn ${className}`}>
        {icon && <i className={`fa-solid fa-${icon}`}></i>} {text}
      </a>
    );
  }
  return null;
};

export default Button;
