import React from 'react';
import './DisplayService.css';

const DisplayService = (props) => {
    // console.log(props);
    const {name,img,description} = props.service;
    return (
        <div className="display-service">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description.slice(0,300)}</p>
                <button>Details</button>
            </div>
        </div>
    );
};

export default DisplayService;