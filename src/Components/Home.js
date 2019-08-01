import React from 'react';

const home = () => {
    return (
        <div className="clearfix row">
            <div className="home-banner">
                <img src={require("../Assests/images/homeBanner.jpg")} alt="Home Banner" className="img-fluid" />
            </div>
        </div>
    )
    
    }
export default home;