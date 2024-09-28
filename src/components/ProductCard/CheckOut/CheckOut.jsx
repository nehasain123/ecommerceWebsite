// import React from 'react';
// import './Checkout.css'; // Import the CSS file
// import Carousel from '../../Carousel/Carousel';
//   import CheckoutBanner from '../CheckOut/CheckoutBanner/CheckoutBanner';
// const Checkout = () => {
//     return (
//         <>
//          <CheckoutBanner />
//           <div className="container my-5">
//       <div className="row">
//         {/* Billing Address Section */}
//         <div className="col-lg-8 mb-4">
//           <div className="  ">
//             <div className="card-header bg-light py-3">
//               <h5 className="mb-0">
//                 <span className="text-warning me-2">✔</span>Billing Address
//               </h5>
//             </div>
//             <div className="card-body">
//               <div className="mb-3">
//                 <input type="text" className="form-control" placeholder="Name" />
//               </div>
//               <div className="mb-3">
//                 <input type="email" className="form-control" placeholder="Email" />
//               </div>
//               <div className="mb-3">
//                 <input type="text" className="form-control" placeholder="Address" />
//               </div>
//               <div className="mb-3">
//                 <input type="text" className="form-control" placeholder="Phone" />
//               </div>
//               <div className="mb-3">
//                 <textarea className="form-control" placeholder="Say Something" rows="3"></textarea>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order Details Section */}
//         <div className="col-lg-4">
//           <div className="card p-3">
//             <table className="table table-borderless">
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Strawberry</td>
//                   <td>$85.00</td>
//                 </tr>
//                 <tr>
//                   <td>Berry</td>
//                   <td>$70.00</td>
//                 </tr>
//                 <tr>
//                   <td>Lemon</td>
//                   <td>$35.00</td>
//                 </tr>
//                 <tr>
//                   <td>Subtotal</td>
//                   <td>$190.00</td>
//                 </tr>
//                 <tr>
//                   <td>Shipping</td>
//                   <td>$50.00</td>
//                 </tr>
//                 <tr className="fw-bold">
//                   <td>Total</td>
//                   <td>$240.00</td>
//                 </tr>
//               </tbody>
//             </table>
//             <button className="btn btn-warning w-100 mt-3">Place Order</button>
//           </div>
//         </div>
//       </div>

//       {/* Extra Sections */}
//       <div className="row">
//         <div className="col-lg-12 accordionson ">
//           <div className="accordion" id="accordionExample">
//             <div className="accordion-item mb-4">
//               <h2 className="accordion-header">
//                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#shippingAddress" aria-expanded="true">
//                   <span className="text-warning me-2">✔</span>Shipping Address
//                 </button>
//               </h2>
//               <div id="shippingAddress" className="accordion-collapse collapse show">
//                 <div className="accordion-body">
//                   {/* You can add the Shipping Address form here */}
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cardDetails">
//                   <span className="text-warning me-2">✔</span>Card Details
//                 </button>
//               </h2>
//               <div id="cardDetails" className="accordion-collapse collapse">
//                 <div className="accordion-body">
//                   {/* You can add the Card Details form here */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//         <Carousel />
//         </>
//     );
// };

// export default Checkout;






// import React from 'react';
// import './Checkout.css'; // Import the CSS file
// import Carousel from '../../Carousel/Carousel';
// import CheckoutBanner from '../CheckOut/CheckoutBanner/CheckoutBanner';

// const Checkout = () => {
//     return (
//         <>
//             <CheckoutBanner />
//             <div className="container my-5">
//                 <div className="row">
//                     {/* Billing Address Section */}
//                     <div className="col-lg-8 mb-4">
//                         <div className="  ">
//                             <div className="card-header bg-light py-3">
//                                 <h5 className="mb-0">
//                                     <span className="text-warning me-2">✔</span>Billing Address
//                                 </h5>
//                             </div>
//                             <div className="card-body">
//                                 <div className="mb-3">
//                                     <input type="text" className="form-control" placeholder="Name" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <input type="email" className="form-control" placeholder="Email" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <input type="text" className="form-control" placeholder="Address" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <input type="text" className="form-control" placeholder="Phone" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <textarea className="form-control" placeholder="Say Something" rows="3"></textarea>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Order Details Section */}
//                     <div className="col-lg-4">
//                         <div className="card p-3">
//                             <table className="table table-borderless">
//                                 <thead>
//                                     <tr>
//                                         <th>Product</th>
//                                         <th>Total</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>Strawberry</td>
//                                         <td>$85.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Berry</td>
//                                         <td>$70.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Lemon</td>
//                                         <td>$35.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Subtotal</td>
//                                         <td>$190.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Shipping</td>
//                                         <td>$50.00</td>
//                                     </tr>
//                                     <tr className="fw-bold">
//                                         <td>Total</td>
//                                         <td>$240.00</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                             <button className="btn btn-warning w-100 mt-3">Place Order</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Extra Sections */}
//                 <div className="row">
//                     <div className="col-lg-12 accordionson ">
//                         <div className="accordion" id="accordionExample">
//                             <div className="accordion-item mb-4">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#shippingAddress" aria-expanded="true">
//                                         <span className="text-warning me-2">✔</span>Shipping Address
//                                     </button>
//                                 </h2>
//                                 <div id="shippingAddress" className="accordion-collapse collapse show">
//                                     <div className="accordion-body">
//                                         {/* Dummy text for Shipping Address */}
//                                         <p>This is a dummy shipping address text. Please enter your correct address here.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cardDetails">
//                                         <span className="text-warning me-2">✔</span>Card Details
//                                     </button>
//                                 </h2>
//                                 <div id="cardDetails" className="accordion-collapse collapse">
//                                     <div className="accordion-body">
//                                         {/* Dummy text for Card Details */}
//                                         <p>This is a dummy card details text. Please enter your valid card information here.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Carousel />
//         </>
//     );
// };

// export default Checkout;




// import React from 'react';
// import './Checkout.css'; // Import the CSS file
// import Carousel from '../../Carousel/Carousel';
// import CheckoutBanner from '../CheckOut/CheckoutBanner/CheckoutBanner';

// const Checkout = () => {
//     return (
//         <>
//             <CheckoutBanner />
//             <div className="container my-5">
//                 <div className="row">
//                     {/* Billing Address Section */}
//                     <div className="col-lg-8 mb-4">
//                         <div className="accordion" id="accordionBillingAddress">
//                             <div className="accordion-item mb-4">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#billingAddressForm" aria-expanded="true">
//                                         <span className="text-warning me-2">✔</span>Billing Address
//                                     </button>
//                                 </h2>
//                                 <div id="billingAddressForm" className="accordion-collapse collapse">
//                                     <div className="accordion-body">
//                                         <div className="mb-3">
//                                             <input type="text" className="form-control" placeholder="Name" />
//                                         </div>
//                                         <div className="mb-3">
//                                             <input type="email" className="form-control" placeholder="Email" />
//                                         </div>
//                                         <div className="mb-3">
//                                             <input type="text" className="form-control" placeholder="Address" />
//                                         </div>
//                                         <div className="mb-3">
//                                             <input type="text" className="form-control" placeholder="Phone" />
//                                         </div>
//                                         <div className="mb-3">
//                                             <textarea className="form-control" placeholder="Say Something" rows="3"></textarea>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Order Details Section */}
//                     <div className="col-lg-4">
//                         <div className="card p-3">
//                             <table className="table table-borderless">
//                                 <thead>
//                                     <tr>
//                                         <th>Product</th>
//                                         <th>Total</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>Strawberry</td>
//                                         <td>$85.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Berry</td>
//                                         <td>$70.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Lemon</td>
//                                         <td>$35.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Subtotal</td>
//                                         <td>$190.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Shipping</td>
//                                         <td>$50.00</td>
//                                     </tr>
//                                     <tr className="fw-bold">
//                                         <td>Total</td>
//                                         <td>$240.00</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                             <button className="btn btn-warning w-100 mt-3">Place Order</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Extra Sections */}
//                 <div className="row">
//                     <div className="col-lg-12 accordionson ">
//                         <div className="accordion" id="accordionExample">
//                             <div className="accordion-item mb-4">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#shippingAddress" aria-expanded="true">
//                                         <span className="text-warning me-2">✔</span>Shipping Address
//                                     </button>
//                                 </h2>
//                                 <div id="shippingAddress" className="accordion-collapse collapse show">
//                                     <div className="accordion-body">
//                                         <p>This is a dummy shipping address text. Please enter your correct address here.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cardDetails">
//                                         <span className="text-warning me-2">✔</span>Card Details
//                                     </button>
//                                 </h2>
//                                 <div id="cardDetails" className="accordion-collapse collapse">
//                                     <div className="accordion-body">
//                                         <p>This is a dummy card details text. Please enter your valid card information here.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Carousel />
//         </>
//     );
// };

// export default Checkout;


import React from 'react';
import './Checkout.css'; // Import the CSS file
import Carousel from '../../Carousel/Carousel';
import CheckoutBanner from '../CheckOut/CheckoutBanner/CheckoutBanner';

const Checkout = () => {
    return (
        <>
            <CheckoutBanner />
            <div className="container  main-section-form">
                <div className="row  ">
                    {/* Billing Address Section */}
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

                            {/* Shipping Address Section */}
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

                            {/* Card Details Section */}
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

                    {/* Order Details Section */}
                    {/* <div className="col-lg-4">
                        <div className="  p-3">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>$190.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>$50.00</td>
                                    </tr>
                                    <tr  >
                                        <td>Total</td>
                                        <td>$240.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="Add-Cart-btn">
                                <a class="btn btn-warning" href="/cart">
                               Place order
                                </a>
                            </div>
                        </div>
                    </div> */}
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
						<div class="Add-Cart-btn"><a href="#" class="btn btn-warning mt-4">  Place Order</a></div>
					</div>
                </div>
            </div>
            <Carousel />
        </>
    );
};

export default Checkout;
