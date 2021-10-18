import React from 'react';
import './DisplayService.css';

const DisplayService = (props) => {
    // console.log(props);
    const {name,img,description} = props.service;
    return (
        <div className="col-12 d-flex my-4 p-4 display-service">
            <div>
                <img className="w-75" src={img} alt="" />
            </div>
            <div className="">
                <h3 className="text-primary">{name}</h3>
                <p><li>{description.slice(0,300)}</li></p>
                <button className="btn btn-outline-success fw-bolder">More info</button>
            </div>
        </div>
    );
};

export default DisplayService;