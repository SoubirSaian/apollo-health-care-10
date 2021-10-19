import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const {error,inputPasswordHandle,inputEmailHandle,handleEmailPassword} = useAuth();
    return (
        <div>
            <h2 className="text-center">register page</h2>

            <form className="mx-auto w-25" onSubmit={handleEmailPassword}>

                <input type="email" onBlur={inputEmailHandle} name="email" placeholder="enter email..."/>
                <br />
                <input type="password" onBlur={inputPasswordHandle} name="password" placeholder="enter password"/>
                <br />
                <input type="submit" value="Register" />
                <span className="text-danger">{error}</span>

            </form>
        </div>
    );
};

export default Register;