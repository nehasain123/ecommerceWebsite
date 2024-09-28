
import ProductCard from './ProductCard';
import strawberryImg from './images/product-img-1.jpg';
import berryImg from './images/product-img-2.jpg';
import lemonImg from './images/product-img-3.jpg';

const ProductList = () => {
  const products = [
    { id: 1, title: 'Strawberry', price: 85, image: strawberryImg },
    { id: 2, title: 'Berry', price: 70, image: berryImg },
    { id: 3, title: 'Lemon', price: 35, image: lemonImg },
  ];

  return (
    <section className="product-list-section mt-5 mb-5">
      <div className="container">
        <div className=' mt-5 mb-5'>
          <h2 className="section-title">
            Our <span>Products</span>
          </h2>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas <br /> itaque eveniet beatae optio.</p>
        </div>
        <div className="row d-flex justify-content-center">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
