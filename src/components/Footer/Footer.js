import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer ">
            <div className="d-flex flex-column justify-content-center align-items-center pt-5">
                 <span>
                    <i class="fab fa-facebook-square social-icon"></i>
                    <i class="fab fa-twitter-square social-icon"></i>
                    <i class="fab fa-instagram-square social-icon"></i>
                    <i class="fab fa-youtube-square social-icon"></i>
                    <i class="fab fa-linkedin social-icon"></i>
                </span>
                
                <h5 className="text-white">Apollo Hospital &copy; 2021</h5>
            </div>
        </div>
    );
};

export default Footer;