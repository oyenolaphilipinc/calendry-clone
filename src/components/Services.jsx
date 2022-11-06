import React from 'react'
import './Services.css'
import frame from '../assets/Frame.png'
import dollar from '../assets/dollar-sign.svg'

function Services(){
    return(
        <div className='services-wrapper'>
            <div className="services-h1">
                <h1>Designed for teams who conduct <br /> meetings at scale</h1>
            </div>
            <div className='services-links'>
                <ul className='services-link'>
                    <li><a href='#'>Sales</a></li>
                    <li><a href='#'>Marketing</a></li>
                    <li><a href='#'>Customer Success</a></li>
                    <li><a href='#'>Recruiting</a></li>
                    <li><a href='#'>Information Technology</a></li>
                    <li><a href='#'>Education</a></li>
                </ul>
            </div>
            <div className='services-content'>
            <div className='services-ops'>
                <img src={dollar}/>
            </div>
                <div className='right'>
                    <h2 className='font-up'> Drive more revenue</h2>
                </div>
                <div>
                    <img src={frame} height={500} width={500} />
                </div>
            </div>
        </div>
    )
}

export default Services;