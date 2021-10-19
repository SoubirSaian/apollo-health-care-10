import React from 'react';

const ServiceDetail = (props) => {
    // console.log(3000000);
    // console.log(props);
    // console.log(400000);
    const {name,img,description} = props.detail;
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    );
};

export default ServiceDetail;