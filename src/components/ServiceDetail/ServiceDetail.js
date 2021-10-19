import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = (props) => {
    // console.log(3000000);
    // console.log(props);
    // console.log(400000);
    const {name,img,description,highlight} = props.detail;
    return (
        <div className="container service-detail">
            <h2 className="text-center">{name}</h2>

            <div className="image">
                <img className="w-50" src={img} alt="" />
            </div>

            <p className="p-5">{description}</p>
            <h3 className="text-primary m-4">Highlights:</h3>
            <p className="p-5">{highlight}</p>
        </div>
    );
};

export default ServiceDetail;