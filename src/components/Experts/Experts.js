import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css';

    // display all the expert in home page 
const Experts = () => {
    const [experts,setExperts] = useState([]);

    useEffect( ()=>{
        fetch('./expertApi.json')
          .then(res => res.json())
          .then(data => setExperts(data));
    },[]);
    return (
        <div className="container">
            <h2 className="text-center mb-5" style={{color:'#237d9e'}}>Get to know our Team Of Experts</h2>

            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;