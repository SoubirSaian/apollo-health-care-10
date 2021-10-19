import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    const {serviceId} = useParams();
    const [service,setService] = useState([]);
    
    useEffect( () => {
        fetch('/localApi.JSON')
            .then(res => res.json())
            .then(data => setService(data));
    },[]);
     
    // console.log(service);
    
    const details = service.find(({id}) => id === parseInt(serviceId));
    // console.log(details);
    return (
        <div>
            <h2>service page details {serviceId}</h2>
            {
               details && <ServiceDetail detail={details}></ServiceDetail>
            } 
        </div>
    );
};

export default Service;