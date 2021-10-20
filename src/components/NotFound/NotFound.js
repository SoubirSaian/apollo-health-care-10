import React from 'react';
import './NotFound.css';
import notFoundImg from '../../images/404-not-found.png';
import { Link } from 'react-router-dom';

    //  notfound component page 
const NotFound = () => {
    return (
        <div className="notFound-page">
             <img className="w-100 h-75" src={notFoundImg} alt="" />
             <Link to="/home">
                <button className="btn btn-outline-primary button d-inline"> got to Home page</button>
             </Link>
        </div>
    );
};

export default NotFound;