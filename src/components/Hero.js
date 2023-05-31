/* eslint-disable no-unused-vars */
import './Hero.css'
import React from 'react'
import Crypto from '../Assets/hero-img.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/*Left Side */}
            <div className='left'>
            <p>Buy and Sell crypto 24/7</p>
            <h1>Invest in Cryptocurrency with your IRA</h1>
            <p>Buy, sell and store hundreds of cryptocurrencies</p>
            <div className='input-container'>
                <input type="email" placeholder='Enter your email ' class="custom-input"/>
                <button className='btn'>Learn More</button>
            </div>
            </div>
            {/*Right Side */}
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
