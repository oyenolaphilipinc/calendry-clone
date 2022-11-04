import React from 'react'
import './Login.css'

function Login(){
    return(
        <div className="text-center">
            <h1>Signup</h1>
            <form className="">
                <input className='mb-4' type="text" placeholder='First Name' required /><br/>
                <input className="mb-4" type="text" placeholder="Second Name" required/><br/>
                <input className="mb-4" type="text" placeholder="UserName" required/><br/>
                <button className="text-blue-600 p-2">SignUp</button>
            </form>
        </div>
    )
}

export default Login