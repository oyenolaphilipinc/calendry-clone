import React from 'react'
import './cta.css'
import logo from '../assets/EBay_logo.svg'
import zenefit from '../assets/Vector.svg'
import Compass from '../assets/Compass__2_.svg'
import Twilio from '../assets/Twilio-logo-red.svg'
import Dropbox from '../assets/Dropbox_logo_2017__1_.svg'

function CTA(){
    return(
        <div className="cta-home">
            <div className='font-h1'>
                <h1 className='pool'>Simplified scheduling for more than <br /> <span className='span-out'> 10,000,000</span> users worldwide</h1>
            </div>
            <div className="icons">
                <img src={logo} height={100} width={100} />
                <img className='zene' src={zenefit} height={150} width={150} />
                <img className='zene' src={Compass} height={150} width={150} />
                <img className='zene' src={Twilio} height={150} width={150} />
                <img className='zene' src={Dropbox} height={150} width={150} />
            </div>
        </div>
    )
}

export default CTA;