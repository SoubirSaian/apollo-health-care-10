import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

    // display individual service details component 
const Service = () => {
    const {serviceId} = useParams();
    const [service,setService] = useState([]);
    
    useEffect( () => {
        fetch('/localApi.json')
            .then(res => res.json())
            .then(data => setService(data));
    },[]);
     
    
    const details = service.find(({id}) => id === parseInt(serviceId));
    // console.log(details);
    return (
        <div>
            
            {
               details && <ServiceDetail detail={details}></ServiceDetail>
            } 
        </div>
    );
};

export default Service;