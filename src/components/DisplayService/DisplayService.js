import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayService.css';

            // display all the services at the home page 
const DisplayService = (props) => {
    
    const {id,name,img,description} = props.service;
    return (
        <div className="col-12 d-flex my-4 p-4 display-service">
            <div>
                <img className="w-75" src={img} alt="" />
            </div>
            <div>
                <h3 className="text-primary">{name}</h3>
                <p><li>{description.slice(0,300)}</li></p>
                <Link to={`/service/${id}`}>
                    <button className="btn btn-outline-success fw-bolder">More info</button>
                </Link>
            </div>
        </div>
    );
};

export default DisplayService;