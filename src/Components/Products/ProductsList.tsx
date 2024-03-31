import "./Products.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRightLong } from "react-icons/fa6";

interface Prop {
  title: string;
  items?: {
    id: number;
    name?: string;
    price?: number;
    delivery?: string;
    img: string;
    title?: string;
  }[];
}

const ProductsList = ({ title, items }: Prop) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="products_container">
      <p id="title" className="mb-3">
        {title}
      </p>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        className="product_list"
      >
        {items?.map((item) => (
          <div className="product_card" key={item.id}>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="text">
              {item.name ? <small>{item.name}</small> : ""}
              {item.price ? <small>{item.price}</small> : ""}
              {item.delivery ? <small>{item.delivery}</small> : ""}
              {item.name ? (
                <div className="flex align-center justify-between mt-3">
                  <button className="btn">Get Now</button>
                  <span>${item.price}</span>
                </div>
              ) : (
                ""
              )}
            </div>

            {item.name ? (
              ""
            ) : (
              <div className="p-2 px-3 flex align-center justify-between">
                <div className="flex align-start flex-col">
                  <span>{item.title}</span>
                  <small className="text-gray-500 my-2 cursor-pointer">
                    Buy Now
                  </small>
                </div>
                <FaArrowRightLong className="cursor-pointer" />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsList;
