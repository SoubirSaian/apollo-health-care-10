import React, { useEffect, useState } from 'react';
import DisplayService from '../DisplayService/DisplayService';
import './Services.css';

const Services = () => {
    const [medicalservices,setMedicalServices] = useState([]);

    useEffect(()=>{
        fetch('./localApi.JSON')
        .then( res => res.json())
        .then( data =>  setMedicalServices(data));
    },[]);
    return (
        <div>
            <h2>Our Services</h2>
             <div className="services">
                {
                    medicalservices.map(service => <DisplayService key={service.id} service={service}></DisplayService>)
                }  
             </div>
        </div>
    );
};

export default Services;