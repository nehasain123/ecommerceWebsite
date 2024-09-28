import React from 'react';
import './Breadcrumb.css'
const Breadcrumb = ({heading,title}) => {
    return (
        <div className="cart-banner breadcrumb-bg breadcrumb-section">
            <div className="breadcrumb-text">
                <p>{heading}</p>
                <h1>{title}</h1>
            </div>
        </div>
    );
};
export default Breadcrumb;
                                