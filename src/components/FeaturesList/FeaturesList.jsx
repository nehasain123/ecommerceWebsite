
import './FeaturesList.css';



const Banner = () => {
  return (
    <>
      <div className="container my-5 info-bar">
        <div className="row text-center d-flex justify-content-center">
          {/* Free Shipping */}
          <div className="col-md-4">
            <div className="info-item">
              <span className="icon mb-2">
                <i className="fas fa-shipping-fast fa-2x"></i>
              </span>
              <div className='text-start'>  
                  <h5>Free Shipping</h5>
                <p>When order over $75</p></div>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="col-md-4">
            <div className="info-item">
              <span className="icon mb-2">
                <i className="fas fa-headset fa-2x"></i>
              </span>
              <div className='text-start'>  
              <h5>24/7 Support</h5>
              <p>Get support all day</p>
              </div>
            </div>
          </div>

          {/* Refund */}
          <div className="col-md-4">
            <div className="info-item">
              <span className="icon mb-2">
                <i className="fas fa-sync-alt fa-2x"></i>
              </span>
              <div className='text-start'>  
              <h5>Refund</h5>
              <p>Get refund within 3 days!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Banner;
