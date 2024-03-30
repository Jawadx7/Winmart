import './App.scss';
import Hero from './Components/Hero/Hero';
import ProductsList from './Components/Products/ProductsList';
import Stores from './Components/Stores/Stores';
import Footer from './Components/Footer/Footer'
import shoe from './asserts/shoe.png'
import shirt from './asserts/Vector.png'
import dress from './asserts/dress 1.png'
import kitchen from './asserts/restaurant 1.png'
import shop from './asserts/shop.png'
import clothes from './asserts/clothes.png'
import rect_white from './asserts/Rect_white.png'
import rect_blue from './asserts/Rect_blue.png'
import appstore from './asserts/AppStore.png'
import ad from './asserts/ads.png'
import play from './asserts/GooglePlay.png'

const Payday = () => {
  return (
    <div className="payday bg-orange-500">
        <div className="payday_img"><img src={clothes} alt="" /></div>
        <div className="payday_text">
          <div className='tag relative'>
            <img src={rect_white} alt="" />
            <span className='absolute'>PAYDAY</span>
          </div>
          <h3>SALE NOW</h3>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iure molestiae optio excepturi et facere!</p>

          <h5>1 June - 10 July 2021</h5>
          <p className='my-2'>#Torem ipsum dolor sit amet consectetur.</p>
          <button className="border-none outline-none py-2 px-5 bg-orange-700 flex align-center space-x-5 text-white">
            <p>Shop Now</p>
            <span>&#9776;</span>
          </button>
        </div>
    </div>
  );
}


const App: React.FC = () => {

  return (
    <div className="App">
      <Hero />

      {/* CATEGORY SECTION */}
      <section className="category">
        <h3 className="my-2">Category</h3>
        <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2">
          <div id='category_list' className="bg-gray-200 py-5 grid grid-cols-3 align-center">
            <div id='categoty_item' className='flex align-center justify-center flex-col'>
              <img src={shirt} alt=""/>
              <small className='font-bold text-indigo-900'>Sneaers</small>
            </div>
            <div id='categoty_item' className='flex align-center justify-center flex-col'>
              <img src={shirt} alt="" />
              <small className='font-bold text-indigo-900'>Men Clothes</small>
            </div>
            <div id='categoty_item' className='flex align-center justify-center flex-col'>
              <img src={dress} alt="" />
              <small className='font-bold text-indigo-900'>Ladies Dress</small>
            </div>
          </div>
          <div id='category_list' className="bg-gray-200 py-5 grid grid-cols-3 align-center">
            <div id='categoty_item' className='flex align-center justify-center flex-col'>
              <img src={shirt} alt=""/>
              <small className='font-bold text-indigo-900'>Casio Watch</small>
            </div>
            <div id='categoty_item' className='flex align-center justify-center flex-col'>
              <img src={kitchen} alt="" />
              <small className='font-bold text-indigo-900'>Win Kitchen</small>
            </div>
            <div id='categoty_item' className='flex align-center justify-center flex-col'>
              <img src={kitchen} alt="" />
              <small className='font-bold text-indigo-900'>Stores</small>
            </div>
          </div>
        </div>
      </section>

      <ProductsList title={"Trending Products"}/>

      {/* PAYDAY */}
      <Payday />

      <ProductsList title='Featured Products'/>

      <section className="payday2 bg-gray-200">
        <div className="payday_text">
          <div className='tag relative'>
            <img src={rect_blue} alt="" />
            <span className='absolute'>PAYDAY</span>
          </div>
          <h3>DOWNLOAD APP &</h3>
          <h4>GET THE COUPON</h4>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iure molestiae optio excepturi et facere!</p>
          <div className="buttons flex align-center space-x-3 w-fit">
            <img src={play} alt="" className='w-12'/>
            <img src={appstore} alt="" className='w-12'/>
          </div>
        </div>
        <div className="payday_img"><img src={ad} alt="" /></div>
      </section>

      <Stores />
      <Footer />
    </div>
  );
}

export default App;
