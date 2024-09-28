import './CartBanner.css';
import strawberryImage from "./images/a.jpg"
  import Button from '../Button/Button';
const CartBanner = () => {
  return (
    <section className="carts-banner pt-5   pb-5">
      <div className="container">
        <div className="row clearfix">

          <div className="image-column col-lg-6">
            <div className="image">
              <div className="price-box">
                <div className="inner-price">
                  <span className="price">
                    <strong>30%</strong> <br /> off per kg
                  </span>
                </div>
              </div>
              <img src={strawberryImage} alt="Strawberry" />
            </div>
          </div>
          <div className="content-column col-lg-6">
            <h2 className="section-title text-start"> <span>Deal</span>   of the month </h2>
            <h4>Hikan Strawberry</h4>
            <div className="text">
              Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique!
              Beatae, minima quisquam molestias facere ea.
              Perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </div>

            <div className="time-counter">
              <div className="time-countdown clearfix" data-countdown="2020/2/01">
                <div className="counter-column">
                  <div className="inner"><span className="count">00</span> Days</div>
                </div>
                <div className="counter-column">
                  <div className="inner"><span className="count">00</span> Hours</div>
                </div>
                <div className="counter-column">
                  <div className="inner"><span className="count">00</span> Mins</div>
                </div>
                <div className="counter-column">
                  <div className="inner"><span className="count">00</span> Secs</div>
                </div>
              </div>
            </div>
            <div className="Add-Cart-btn">
          <Button textKey="addToCart" type="link" link="#" icon={" fa-solid  fa-cart-shopping"} className="btn-warning" />
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBanner;

// <Button text="View" type="link" link="/card" icon="magnifying-glass" class="test">
// <Button text="View" type="btn" icon="magnifying-glass">

// if(type == 'btn'){
//   icon !=''{
//     <i class="fa-solid fa-"+icon+""></i>
//   }
// }else{
//   <
// }


// export default HeroSection;
