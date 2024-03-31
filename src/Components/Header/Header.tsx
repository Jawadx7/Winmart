import './Header.scss'
import { useState } from 'react'
import Logo from '../../asserts/logo_sm.png'
import food from '../../asserts/restaurant 2.png'
// import { showNav, closeNav } from './actions'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {

  const [navStatus, setNavStatus] = useState<string>("closed")

  const showNav = () => {
    setNavStatus('opened')
  }

  const closeNav = () => {
    setNavStatus('closed')
  }

  return (
    <div className='header flex justify-between align-center'>
      <div className="logo w-10 h-10"><img src={Logo} alt="logo" /></div>

      <div className="filter flex space-x-3 align-center">
        <select className='bg-gray-100 border-2 rounded-full py-1 px-2 hmd outline-none'>
          <option value="all">All Products</option>
          <option value="fashion">Fashion</option>
          <option value="computing">Computing</option>
        </select>

        <div className="search bg-gray-100 border-2 rounded-full flex justify-center align-center">
          <input type="text" placeholder='search' className="px-2 py-1 outline-none rounded-full bg-transparent hmd"/>
          <span className='cursor-pointer'><CiSearch /></span>
        </div>
      </div>

      <div className="text_div flex space-x-10 border-r-2 pr-10">
        <div className="flex align-center flex-col">
          <small className='text-gray-300'>Hello, Sign In</small>
          <small>My Account</small>
        </div>
        <div className="flex align-center flex-col">
          <small className='text-gray-300'>My Cart</small>
          <small>$836.00</small>
        </div>
      </div>

      <div className="nav">
        <div className="closeBtn" onClick={() => closeNav()}>x</div>
        <button className="btn mb-5">SIGN UP FREE</button>
        <ul className='text-right'>
          <li className='flex align-center justify-end'><span>Food App</span> <img src={food} alt="" className='w-10 h-10' /></li>
          <li>Accessories</li>
          <li>Laptops</li>
          <li>Watch</li>
        </ul>
      </div>

      <div id='nav2' className={(navStatus === 'opened' ? 'opened' : 'closed')}>
        <div className="closeBtn" onClick={() => closeNav()}>x</div>
        <button className="btn mb-5">SIGN UP FREE</button>
        <ul className='text-right'>
          <li className='flex align-center justify-end hover:text-orange-500'><span>Food App</span> <img src={food} alt="" className='w-10 h-10' /></li>
          <li>Accessories</li>
          <li>Laptops</li>
          <li>Watch</li>
        </ul>
      </div>

      <div className="menuBtn" onClick={() => showNav()}><RiMenu4Fill /></div>
    </div>
  )
}

export default Header