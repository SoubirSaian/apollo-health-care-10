import React, { useEffect, useState } from 'react';
import DisplayService from '../DisplayService/DisplayService';
import './Services.css';

//  home page service component 
const Services = () => {
    const [medicalservices,setMedicalServices] = useState([]);

    //   fetching fake data 
    useEffect(()=>{
        fetch('./localApi.json')
        .then( res => res.json())
        .then( data =>  setMedicalServices(data));
        
    },[]);
    
    return (
        <div className="container my-5">
            <h2 className="text-center text-success">Our Center of Excellences</h2>
             <div className="row my-3">
                {
                    medicalservices.map(service => <DisplayService key={service.id} service={service}></DisplayService>)
                }  
             </div>
        </div>
    );
};

export default Services;