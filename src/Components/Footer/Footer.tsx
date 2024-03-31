import './Footer.scss'
import logo_lg from '../../asserts/logo.png'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 sm:grid-cols-2 sm:gap-y-3 md:grid-cols-4 gap-3'>
      <article>
        <img src={logo_lg} alt="" />
        <ul>
          <li>Sunyani, Ghana</li>
        </ul>
      </article>
      <article>
        <h2>Company</h2>
        <ul>
          <li>About</li>
          <li>Contact Us</li>
          <li>Support</li>
          <li>Careers</li>
        </ul>
      </article>
      <article>
        <h2>Quick Link</h2>
        <ul>
          <li>Order Tracking</li>
          <li>FAQs</li>
        </ul>
      </article>
      <article>
        <h2>Legal</h2>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </article>
    </footer>
  )
}

export default Footer