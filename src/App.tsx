import "./App.scss";
import Hero from "./Components/Hero/Hero";
import ProductsList from "./Components/Products/ProductsList";
import Stores from "./Components/Stores/Stores";
import Footer from "./Components/Footer/Footer";
import shirt from "./asserts/Vector.png";
import dress from "./asserts/dress 1.png";
import kitchen from "./asserts/restaurant 1.png";
import clothes from "./asserts/clothes.png";
import rect_white from "./asserts/Rect_white.png";
import rect_blue from "./asserts/Rect_blue.png";
import appstore from "./asserts/AppStore.png";
import ad from "./asserts/ads.png";
import play from "./asserts/GooglePlay.png";
import { Featured } from "./Data/Featured";
import { Trending } from "./Data/Trending";
import { FaShoppingCart } from "react-icons/fa";

const Payday = () => {
  return (
    <div className="payday bg-orange-500">
      <div className="payday_img">
        <img src={clothes} alt="" />
      </div>
      <div className="payday_text">
        <div className="tag relative">
          <img src={rect_white} alt="" />
          <span className="absolute">PAYDAY</span>
        </div>
        <h3>SALE NOW</h3>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iure
          molestiae optio excepturi et facere!
        </p>

        <h5>1 June - 10 July 2021</h5>
        <p className="my-2">#Torem ipsum dolor sit amet consectetur.</p>
        <button className="border-none outline-none py-2 px-5 bg-orange-700 flex align-center space-x-5 text-white">
          <p>Shop Now</p>
          <span>
            <FaShoppingCart className="font-bold" />
          </span>
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />

      {/* CATEGORY SECTION */}
      <section className="category">
        <h3 className="my-2">Category</h3>
        <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2">
          <div
            id="category_list"
            className="bg-gray-200 py-5 grid grid-cols-3 align-center"
          >
            <div
              id="categoty_item"
              className="flex align-center justify-center flex-col"
            >
              <img src={shirt} alt="" />
              <small className="font-bold text-indigo-900">Sneaers</small>
            </div>
            <div
              id="categoty_item"
              className="flex align-center justify-center flex-col"
            >
              <img src={shirt} alt="" />
              <small className="font-bold text-indigo-900">Men Clothes</small>
            </div>
            <div
              id="categoty_item"
              className="flex align-center justify-center flex-col"
            >
              <img src={dress} alt="" />
              <small className="font-bold text-indigo-900">Ladies Dress</small>
            </div>
          </div>
          <div
            id="category_list"
            className="bg-gray-200 py-5 grid grid-cols-3 align-center"
          >
            <div
              id="categoty_item"
              className="flex align-center justify-center flex-col"
            >
              <img src={shirt} alt="" />
              <small className="font-bold text-indigo-900">Casio Watch</small>
            </div>
            <div
              id="categoty_item"
              className="flex align-center justify-center flex-col"
            >
              <img src={kitchen} alt="" />
              <small className="font-bold text-indigo-900">Win Kitchen</small>
            </div>
            <div
              id="categoty_item"
              className="flex align-center justify-center flex-col"
            >
              <img src={kitchen} alt="" />
              <small className="font-bold text-indigo-900">Stores</small>
            </div>
          </div>
        </div>
      </section>

      <ProductsList title={"Trending Products"} items={Trending} />
      <ProductsList title={"New Arrival"} items={Trending} />

      {/* PAYDAY */}
      <Payday />

      <ProductsList title="Featured Products" items={Featured} />
      <ProductsList title="Top Sales" items={Featured} />

      <section className="payday2 bg-gray-200">
        <div className="payday_text">
          <div className="tag relative">
            <img src={rect_blue} alt="" />
            <span className="absolute">PAYDAY</span>
          </div>
          <h3>DOWNLOAD APP &</h3>
          <h4>GET THE COUPON</h4>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iure
            molestiae optio excepturi et facere!
          </p>
          <div className="buttons flex align-center space-x-3 w-fit">
            <img src={play} alt="" className="w-12" />
            <img src={appstore} alt="" className="w-12" />
          </div>
        </div>
        <div className="payday_img">
          <img src={ad} alt="" />
        </div>
      </section>

      <Stores />

      {/* NEWSLETTER */}
      <section className="newsletter bg-orange-500 flex align-center justify-center flex-col">
        <h2 className="text-white font-bold w-full sm:w-2/3">
          join winmart community to get monthly promo
        </h2>
        <p className="my-3 text-white font-bold">
          Type your email down below and be wild for big promos
        </p>
        <div className="bg-orange-400 p-2 sm:p-3 rounded-lg">
          <div className="input bg-white p-2 rounded-lg flex align-center gap-1">
            <input
              type="text"
              placeholder="Your Email"
              className="outline-0 border-0 h-full flex-2"
            />
            <button className="border-none outline-none py-2 px-3 sm:py-2 sm:px-5 bg-orange-500 text-white rounded-lg flex-1">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
