import React from 'react';
import './Expert.css';

    //  display all the expert Component individually 
const Expert = (props) => {
    const {name,img,designation,specialist,location} = props.expert;
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center expert">
                <img className="w-50 h-50 " src={img} alt="" />
                <h3 className="text-primary">{name}</h3>
                <h4 style={{color: '#237d9e'}}>{designation}</h4>
                <h5 className="text-info">{specialist}</h5>
                <h5>{location}</h5>
            </div>
        </div>
    );
};

export default Expert;