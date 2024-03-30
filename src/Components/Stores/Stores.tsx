import './Stores.scss'
import pizza from '../../asserts/pizza.png'
import gamepad from '../../asserts/game_pad.png'
import sneaker from '../../asserts/shoe_black.png'
import watch from '../../asserts/watch2.png'

const Stores = () => {
  return (
    <section className='stores'>
        <div className="text">
            <h1>available stores on winmart</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione veritatis facere ullam rem ut dicta officia quidem modi autem! Tenetur!</p>
            <button className="border-none outline-none py-0 px-4 bg-orange-600 flex align-center space-x-3 text-white">
                <p>View All</p>
            <span>&#9776;</span>
          </button>
        </div>
        <div className="stores_imgs">
            <div><img src={pizza} alt="" /></div>
            <div><img src={gamepad} alt="" /></div>
            <div><img src={sneaker} alt="" /></div>
            <div><img src={watch} alt="" /></div>
        </div>
    </section>
  )
}

export default Stores