


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './Header.css';
import "../../assets/responsive.css"
import weblogo from "./images/logo.png";
 

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
 
      <header className={`navbar ${scrolling ? 'scrolled' : ''}`}>
        <div className='container d-flex justify-content-start align-items-center main-header'>
          <div className="logo">
            <img src={weblogo} alt='Logo' />
          </div>
          <nav className={`main-nav-links ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li>
                <Link to="/" className='home-link'>Home</Link>
                <ul className="dropdown">
                  <li><Link to="/about/history">Static Home</Link></li>
                  <li><Link to="/about/team">Slider Home</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/About" className='nav-hover-links'>About</Link>
              </li>
              <li>
                <Link to="/pages" className='nav-hover-links'>Pages</Link>
                <ul className="dropdown">
                  <li><Link to="/about/history"> 404 pages</Link></li>
                  <li><Link to="/About"> About</Link></li>
                  <li><Link to="/Cart">Cart</Link></li>
                  <li><Link to="/checkOut"> Check Out</Link></li>
                  <li><Link to="/about/history"> Contact</Link></li>
                  <li><Link to="/about/team"> News</Link></li>
                  <li><Link to="/about/history">Shop</Link></li>
                  
                </ul>
              </li>
              <li>
                <Link to="/News" className='nav-hover-links'>News</Link>
                <ul className="dropdown">
                  <li><Link to="/about/history">History</Link></li>
                  <li><Link to="/about/team">Team</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/contact" className='nav-hover-links'>Contact</Link>
              </li>
              <li>
                <Link to="/shop" className='nav-hover-links'>Shop</Link>
                <ul className="dropdown">
                  <li><Link to="/about/history">History</Link></li>
                  <li><Link to="/about/team">Team</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <div className="icons">
            <Link to="/cart" className="cart-icon"><i className="fa-solid fa-cart-shopping"></i></Link>
            <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
