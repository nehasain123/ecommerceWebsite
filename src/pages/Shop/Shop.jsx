import React, { useState } from 'react';
import './Shop.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';

const Shop = () => {
    const products = [
        { id: 1, name: 'Strawberry', price: 85, img: '/src/pages/Shop/Images/product-img-1.jpg', category: 'strawberry' },
        { id: 2, name: 'Berry', price: 70, img: '/src/pages/Shop/Images/product-img-2.jpg', category: 'berry' },
        { id: 3, name: 'Lemon', price: 35, img: '/src/pages/Shop/Images/product-img-3.jpg', category: 'lemon' },
        { id: 4, name: 'Avocado', price: 50, img: '/src/pages/Shop/Images/product-img-4.jpg', category: 'avocado' },
        { id: 5, name: 'Green Apple', price: 45, img: '/src/pages/Shop/Images/product-img-5.jpg', category: 'apple' },
        { id: 6, name: 'Strawberry', price: 80, img: '/src/pages/Shop/Images/product-img-6.jpg', category: 'strawberry' },
        { id: 7, name: 'BlackBerry', price: 89, img: './src/pages/Shop/Images/berry.webp', category: 'berry' },
        { id: 8, name: 'Strawberry', price: 79, img: '/src/pages/Shop/Images/Strawberry .avif', category: 'strawberry' },
        { id: 9, name: 'BlackBerry', price: 89, img: './src/pages/Shop/Images/berry2.webp', category: 'berry' },
        { id: 10, name: 'Lemon', price: 85, img: '/src/pages/Shop/Images/lemon3.jpg', category: 'lemon' },
        { id: 11, name: 'Lemon', price: 85, img: '/src/pages/Shop/Images/lemon4.jpg', category: 'lemon' },
    ];
    const [filter, setFilter] = useState('*');
    const handleFilterClick = (category) => setFilter(category === '*' ? '*' : `.${category}`);
    return (
        <>
            <Breadcrumb heading="Fresh and Organic" title="Shop" />
            <div className="container shop-main-section">

                <div className="product-filters text-center mb-4">
                    <ul>
                        {['All', 'Strawberry', 'Berry', 'Lemon'].map((category, index) => (
                            <li
                                key={index}
                                className={filter === (category === 'All' ? '*' : category.toLowerCase()) ? 'active' : ''}
                                onClick={() => handleFilterClick(category === 'All' ? '*' : category.toLowerCase())}              >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="row shop-section">
                    {products
                        .filter(product => filter === '*' || product.category === filter.slice(1))
                        .map(({ id, name, price, img }) => (
                            <div key={id} className="col-lg-4 col-md-6 mb-5">
                                <div className="card h-100 text-center">
                                    <div className='shopImages'>  
                                        <img src={img} alt={name} className="card-img-top" /> 
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">{name}</h4>
                                        <h5>{price}$</h5>
                                        <Button textKey="addToCart" type="link" link="/cart" icon="fa-solid fa-cart-shopping" className="btn-warning" />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="pagination-wrap">
                    <ul className="pagination">
                        <li><a href="#">Prev</a></li>
                        {[1, 2, 3].map(num => (
                            <li key={num}><a className={num === 2 ? 'active' : ''} href="#">{num}</a></li>
                        ))}
                        <li><a href="#">Next</a></li>
                    </ul>
                </div>
            </div>
            <Carousel />
        </>
    );
};
export default Shop;
