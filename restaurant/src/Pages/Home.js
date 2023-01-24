import React from 'react'
import { Link } from 'react-router-dom'
 

function Home() {
    return (
        <div className='home'>
            <div className='homeConteiner'>
                <h1> BURGER BD </h1>
                <p>Delicious Hamburgers <br /> With BD Spicy Mixed</p>
                <Link to='/Menu'><button>Order NOW</button></Link>
            </div>
        </div>
    )
}

export default Home