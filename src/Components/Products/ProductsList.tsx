import './Products.scss'
import ProductItem from './ProductItem'

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
  return (
    <div className='products_container'>
      <p className='mb-3'>{title}</p>
      <div className='product_list'>
        {/* <ProductItem products={items}/> */}
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
      </div>
    </div>
    )
}

export default ProductsList