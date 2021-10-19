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
        <div className="container my-5">
            <h2 className="text-center text-success border-bottom border-2 border-primary ">Our Services</h2>
             <div className="row my-3">
                {
                    medicalservices.map(service => <DisplayService key={service.id} service={service}></DisplayService>)
                }  
             </div>
        </div>
    );
};

export default Services;