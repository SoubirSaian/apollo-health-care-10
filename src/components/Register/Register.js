import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

//    register page component 
const Register = () => {
    const {error,inputPasswordHandle,inputEmailHandle,handleEmailPassword} = useAuth();
    return (
        <div className="container m-5 register-page">
            <h2 className="text-center mb-5 pt-3">Please complete <span className="text-primary">Registration</span></h2>

            <form className="mx-auto w-25 pb-3" onSubmit={handleEmailPassword}>
                
                <input className="form-control fs-4 px-5" type="email" onBlur={inputEmailHandle} name="email" placeholder="enter your email..."/>
                <br />
                <input className="form-control fs-4" type="password" onBlur={inputPasswordHandle} name="password" placeholder="enter your password"/>
                <br />
                <input className="form-control fs-4 form-submit" type="submit" value="Register" />
                <span className="text-danger">{error}</span>

            </form>
            <br />
            <h5 className="text-center pb-5">If you are already registered , go to <Link to="/login">Log In Page</Link></h5>
        </div>
    );
};

export default Register;