import React from 'react';
import Button from '../../Button/Button';
import "../HeaderBanner/HeaderBanner.css";
import "../../../assets/responsive.css";
function App() {
    return (
        <>
            <div className='hero-area hero-bg'>
                <div className="container d-flex">
                    <div className="row hero-main d-flex justify-content-center">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Fresh & Organic</p>
                                    <h1>Delicious Seasonal Fruits</h1>
                                    <div className="hero-btns">
                                        <div className="Add-Cart-btn">
                                            <Button textKey="fruitCollection" type="link" link="#" className="btn-warning" />
                                            <Button textKey="contactUs" type="link" link="/cart" className="bordered-btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default App;
