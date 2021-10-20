import React from 'react';
import './BannerBottom.css';

import image from "../../images/apollohealth-banner.jpg";

const BannerBottom = () => {
    return (
        <div className="row bottom-banner">
            <div className="col-12 col-md-6 col-lg-6 first-half">
                <h3 className="mb-3">Why Choose apollo Health Care ??</h3>
                <p className="mb-3">Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.</p>

                <div className="d-flex mt-3">
                    <div>
                        <h5><li>7000+ healing hands</li></h5>
                        <p>Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.</p>
                    </div>
                    <div>
                        < h5><li>4000+ pharmacies</li></ h5>
                        <p>Apollo Pharmacy is India’s first, largest and most trusted branded pharmacy network, with over 4000 plus outlets covering the entire nation</p>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <div>
                        <h5><li>Most Advanced Health Care Technology</li></h5>
                        <p>Apollo Hospitals has been the pioneer in bringing ground-breaking healthcare technologies to India.</p>
                    </div>
                    <div>
                        <h5><li>Best Clicnical Outcomes</li></h5>
                        <p>Leveraging its vast medical expertise & technological advantage, Apollo Hospitals has consistently delivered best in class clinical outcomes.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <img className="bottom-img" src={image} alt="" />
            </div>
        </div>
    );
};

export default BannerBottom;