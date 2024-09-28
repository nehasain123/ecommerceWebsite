
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/Header/Header';
import HeaderBanner from './components/Header/HeaderBanner/HeaderBanner';

import FeaturesList from './components/FeaturesList/FeaturesList';
import ProductList from './components/ProductCard/ProductList';
import CartBanner from './components/CartBanner/CartBanner';
import TestimonialSection from './components/TestimonialSection/Testimonials ';
import Advertisement from './components/Advertisement/Advertisement';
import ShopBanner from './components/ShopBanner/ShopBanner';
import LatestNews from './components/LatestNews/LatestNews';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Cart from './components/ProductCard/Cart/Cart';
import CheckOut from "./components/ProductCard/CheckOut/CheckOut";
import About from "./pages/About/About";
import News from "./pages/News/News";
// import NotFoundPage from './components/NotFound/NotFoundPage';

import './App.css';
import NotFoundPage from './components/NotFound/NotFoundPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={
            <>
              <HeaderBanner />
              <FeaturesList />
              <ProductList />
              <CartBanner />
              <TestimonialSection />
              <Advertisement />
              <ShopBanner />
              <LatestNews />
              <Carousel />
            </>
          } />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
