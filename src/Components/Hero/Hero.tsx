import './Hero.scss'
import Header from '../Header/Header'
import pic1 from '../../asserts/monica.png'
import pic2 from '../../asserts/monica2.png'
import { CiShoppingCart } from "react-icons/ci";

const Hero = () => {

  return (
    <div className="hero">
      <Header />
      <section className='carousel'>
        {/* className={"nav" + (navStatus === 'opened' ? 'active' : '')} */}
        <div className="carousel_item">
          <div>
          <div className="carousel_item_text">
            <h3 className='size'>DESIGN BY KING DAVID</h3>
            <div id="styled_text">
              hoodie
            </div>

            <h3 className="text-gray-500">Description</h3>
            <p className='my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae. Iusto dicta voluptatibus maiores doloremque culpa quod, odio eligendi.</p>

            <h3 className="text-gray-500 mt-3 size">Sizes</h3>
            <div className="size flex align-center space-x-3 border-b-2 w-fit py-3">
              <span className='flex allign-center space-x-2'>
                <input type="radio" name='size'/>
                <p>Medium</p>
              </span>
              <span className='flex allign-center space-x-2'>
                <input type="radio" name='size'/>
                <p>Large</p>
              </span>
            </div>

            <button className="border-none outline-none py-2 px-5 bg-orange-600 flex align-center space-x-5 text-white">
              <span>add to cart</span>
              <span><CiShoppingCart /></span>
            </button>

            {/* Indicators */}
            <div className="indicators">
              <span id='indicator_btn'>01</span>
              <span id='indicator_btn'>02</span>
              <span id='indicator_btn'>03</span>
            </div>
          </div>
          </div>
          <div className="carousel_img">
            <img src={pic1} alt=""/>
          </div>
          <div className="carousel_img_2">
            <img src={pic2} alt=""/>
          </div>
        </div>

        {/* <div className="carousel_item_2">
          <h1>hello</h1>
        </div> */}
      </section>
    </div>
  )
}

export default Hero