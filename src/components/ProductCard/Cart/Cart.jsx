import React from 'react';
import './Cart.css';
import productImg1 from './products/product-img-1.jpg';
import productImg2 from './products/product-img-2.jpg';
import productImg3 from './products/product-img-3.jpg';
import Carousel from '../../Carousel/Carousel';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';

 

const Cart = () => {
    // Static cart data
    const cart = [
        { id: 1, name: 'Strawberry', price: 85, quantity: 0, image: productImg1 },
        { id: 2, name: 'Berry', price: 70, quantity: 0, image: productImg2 },
        { id: 3, name: 'Lemon', price: 35, quantity: 0, image: productImg3 },
    ];

   
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 200 ? 0 : 45;  
    const total = subtotal + shipping;

    return (
        <>
            <Breadcrumb heading="Fresh and Organic" title="Cart"/>
            <div className="cart-container my-5 justify-content-center">
                <div className="table-wrapper">
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className='data-row'><img src={item.image} alt={item.name} className="product-image" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            readOnly
                                            className="quantity-input"
                                        />
                                    </td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="price-summary">
                    <div className="summary-row pb-3 price-text px-3 pt-3">
                        <span>Total</span>
                        <span>Price</span>
                    </div>
                    <div className="summary-section">
                        <div className="summary-row px-3">
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="summary-row px-3">
                            <span>Shipping:</span>
                            <span>${shipping}</span>
                        </div>
                        <div className="summary-row px-3">
                            <span>Total:</span>
                            <span>${total}</span>
                        </div>
                    </div>

                    <div className="Add-Cart-btn">
                        <a href="#" className="btn btn-warning"> Update Cart</a>
                        <a href="CheckOut" className="btn btn-warning ms-3"> Check Out </a>
                    </div>

                    <div className="coupon-container mt-4">
                        <h3 className='mb-3'>Apply Coupon</h3>
                        <input type="text" placeholder="Coupon" className="coupon-input" />
                    </div>
                    <div className="Add-Cart-btn">
                        <a href="#" className="btn btn-warning"> APPLY</a>
                    </div>
                </div>
            </div>
            <Carousel />
        </>
    );
};

  export default Cart;