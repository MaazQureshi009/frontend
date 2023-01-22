import React from 'react'
import './home.css'
import homeimage from './home.jpg'

function home() {
  return (
    <div className='home' id='home'>
      <div className="home-section">
        
            <img src={homeimage} alt="home" />

            <div className="content">
            <h2>Magic Corner</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis facere fugit nemo sunt ipsam unde atque cum inventore! Necessitatibus natus provident est nam mollitia doloribus aut quaerat commodi perferendis!</p>
            <a href="#products"><button>Shop Now</button></a>
            </div>
            </div>
    </div>
  )
}

export default home