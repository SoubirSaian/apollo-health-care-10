import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../images/banner-slider/banner-1.jpg'; 
import banner2 from '../../images/banner-slider/banner-2.jpg'; 
import banner3 from '../../images/banner-slider/banner-3.jpg'; 

//    top banner carousel slider 
const Banner = () => {
    return (
        <div>
            <Carousel className="slider">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your satisfaction is our priority</h3>
                        <p>World's Best Smart Hospital</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>No. 1 hospital in Bangladesh </h3>
                        <p>We are always ready to serve you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>24 hours emergency</h3>
                        <p>We have best specialist in all sector</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;