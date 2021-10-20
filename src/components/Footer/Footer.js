import React from 'react';
import './Footer.css';

const Footer = () => {

    //    footer section 
    return (
        <div className="footer ">
            <div className="d-flex flex-column justify-content-center align-items-center pt-5">
                <p className="text-white">Contact : +91 8945993088, +91 7363800857</p>
                <p className="text-white">email : apollo.service.2001@gmail.com</p>
                 <span>
                    <i className="fab fa-facebook-square social-icon"></i>
                    <i className="fab fa-twitter-square social-icon"></i>
                    <i className="fab fa-instagram-square social-icon"></i>
                    <i className="fab fa-youtube-square social-icon"></i>
                    <i className="fab fa-linkedin social-icon"></i>
                </span>
                
                <h5 className="text-white">Apollo Hospital &copy; 2021</h5>
            </div>
        </div>
    );
};

export default Footer;