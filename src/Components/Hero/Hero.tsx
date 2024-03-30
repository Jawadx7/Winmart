import './Hero.scss'
import Header from '../Header/Header'
import { useState } from 'react'
import pic1 from '../../asserts/monica.png'

const Hero = () => {
  const [activeIndex, segtActiveIndex] = useState<number>(0)

  // const updateIndex = (newIndex: number) => {
  //   if(newIndex < 0){
  //     newIndex = 0
  //   }else if (newIndex > items.length){
  //     newIndex = items.length - 1
  //   }

  //   segtActiveIndex(newIndex)
  //   console.log(activeIndex)
  // }

  return (
    <div className="hero">
      <Header />
      <section className='carousel'>
        {/* className={"nav" + (navStatus === 'opened' ? 'active' : '')} */}
        <div className="carousel_item_1">
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
              <span>&#9776;</span>
            </button>
          </div>
          </div>
          <div className="carousel_img">
          <img src={pic1} alt=""/>
          </div>
        </div>

        {/* <div className="carousel_item_2">
          <h1>hello</h1>
        </div> */}

        <div className="indicators">
          <span id='indicator_btn'>01</span>
          <span id='indicator_btn'>02</span>
          <span id='indicator_btn'>03</span>
          </div>
      </section>
    </div>
  )
}

export default Hero