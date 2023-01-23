import React from 'react'
import './icons.css'
import loginicon from './user.png'
import bag from './bag.png'
import wishlist from './wishlist.png'
import chat from './chat.png'

function icons() {
    return (
        <div className='floaticons'>
            <a href="/" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <img src={loginicon} className="icon" alt="" />
            </a>

            <a href="/" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <img src={bag} className="icon" alt="" />
            </a>

            <a href="/" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <img src={wishlist} className="icon" alt="" />
            </a>

            <a href="https://wa.me/2348100000000" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <img src={chat} className="icon" alt="" />
            </a>
        </div>
    )
}

export default icons