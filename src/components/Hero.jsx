import React from 'react'
import './Hero.css'
import img from '../assets/Homepage-Hero.png'

function Hero(){
    return(
        <div className="hero-wrapper">
            <div className="hero-children-1">
                <h1 className='text-hype'>Easy <br className='sm:block-hidden' /> scheduling<br className="sm:block-hidden" /> <span>ahead</span></h1>
                <p className="p-tag">Calendly is your scheduling automation platform<br/>
                 for eliminating the hassle of back-and-forth<br/>
                  emails for finding the perfect time — and so much<br/>
                   more.
                </p>
                <form className="mt-4">
                    <input type="text" placeholder='Enter your email' className='input-text mr-2 py-4 px-4' />
                    <button className='primary-button'>Sign up</button>
                    <p className="form-p">Create your free account. No credit card required</p>
                </form>
            </div>
            <div className="hero-children-2">
                <img src={img} height={700} width={700} />
            </div>
        </div>
    )
}

export default Hero;