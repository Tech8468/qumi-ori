import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="homeBanner">
            <h1>
                Welcome to your Laserjet Toner Hub
            </h1>
            <p> ...quality product, best value...</p>
            
            <Link to="/about"><button className='menuBtn'>Enter to take a tour</button></Link>
        </div>
    )
}
export default Home;