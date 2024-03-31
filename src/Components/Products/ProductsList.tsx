import './Products.scss'
// import ProductItem from './ProductItem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import ButtonGroup from './ButtonGroup';


interface Prop{
    title: string,
    items?: {
      id: number;
      name: string;
      price: number;
      delivery: string;
      img: string;
  }[]
}

const ProductsList = ({title, items}: Prop) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 
    }
  };
  return (
    <div className='products_container'>
      <p id="title" className='mb-3'>{title}</p>
      <Carousel 
      // customButtonGroup={<ButtonGroup />}
      swipeable={true} draggable={true} showDots={false} 
      responsive={responsive} className='product_list'>
      {
          items?.map((item) => (
            <div className="product_card" key={item.id}>
              <div className="img"><img src={item.img} alt="" /></div>
                <div className="text">
                  <small>{item.name}</small>
                  <small>${item.price}</small>
                  <small>{item.delivery}</small>
                  <div className="flex align-center justify-between mt-3">
                    <button className="btn">Get Now</button>
                    <span>${item.price}</span>
                  </div>
                </div>
            </div>
          ))
        }
      </Carousel>
    </div>
    )
}

export default ProductsList