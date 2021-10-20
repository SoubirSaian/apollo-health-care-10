import React from 'react';
import BannerBottom from '../BannerBottom/BannerBottom';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import './Home.css';

    // home page 
const Home = () => {
    return (
        <div className="home-page">
            
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;