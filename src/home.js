import React from 'react'
import './home.css'
import homeimage from './home.jpg'

function home() {
  const handleClickScroll = () => {
    const element = document.getElementById('products');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='home' id='home'>
      <div className="home-section">
        
            <img src={homeimage} alt="home" />

            <div className="content">
            <h2>Magic Corner</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis facere fugit nemo sunt ipsam unde atque cum inventore! Necessitatibus natus provident est nam mollitia doloribus aut quaerat commodi perferendis!</p>
            <button onClick={handleClickScroll}>Shop Now</button>
            </div>
            </div>
    </div>
  )
}

export default home