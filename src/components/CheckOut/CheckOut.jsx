import React from 'react';
import './Checkout.css';  
 import Carousel from '../Carousel/Carousel';
 import Breadcrumb from '../Breadcrumb/Breadcrumb';
 import Button from '../Button/Button';
 
const Checkout = () => {
    return (
        <>
           <Breadcrumb heading=" Fresh adn Organic" title="404 - Not Found" />
            <div className="container  main-section-form">
                <div className="row  ">
                   
                    <div className="col-lg-8 mb-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#billingAddressForm" aria-expanded="true" aria-controls="billingAddressForm">
                                        <span className="text-warning me-2"><span className='checkicon'><i class="fa-solid fa-circle-check"></i></span></span>Billing Address
                                    </button>
                                </h2>
                                <div id="billingAddressForm" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Address" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Phone" />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" placeholder="Say Something" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shippingAddress" aria-expanded="false" aria-controls="shippingAddress">
                                        <span className="text-warning me-2"><span className='checkicon'><i class="fa-solid fa-circle-check"></i></span></span>Shipping Address
                                    </button>
                                </h2>
                                <div id="shippingAddress" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>This is a dummy shipping address text. Please enter your correct address here.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cardDetails" aria-expanded="false" aria-controls="cardDetails">
                                        <span className="text-warning me-2"><span className='checkicon'><i class="fa-solid fa-circle-check"></i></span></span>Card Details
                                    </button>
                                </h2>
                                <div id="cardDetails" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>This is a dummy card details text. Please enter your valid card information here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-details-wrap">
						<table class="order-details">
							<thead>
								<tr>
									<th>Your order Details</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody class="order-details-body">
								<tr>
									<td>Product</td>
									<td>Total</td>
								</tr>
								<tr>
									<td>Strawberry</td>
									<td>$85.00</td>
								</tr>
								<tr>
									<td>Berry</td>
									<td>$70.00</td>
								</tr>
								<tr>
									<td>Lemon</td>
									<td>$35.00</td>
								</tr>
							</tbody>
							<tbody class="checkout-details">
								<tr>
									<td>Subtotal</td>
									<td>$190</td>
								</tr>
								<tr>
									<td>Shipping</td>
									<td>$50</td>
								</tr>
								<tr>
									<td>Total</td>
									<td>$240</td>
								</tr>
							</tbody>
						</table>
					  <div className="Add-Cart-btn">

                        <Button textKey="PlaceOrder" type="link" link="#" className="btn-warning" />
                    </div>
					</div>
                </div>
            </div>
            <Carousel />
        </>
    );
};

export default Checkout;
