import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const {user,signInUsingGoogle,error,inputPasswordHandle,inputEmailHandle,handleEmailPassword} = useAuth();
    
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then((result) => {
            
            history.push(redirect_uri);
        });
    }
    return (
        <div className="m-5">
            {user.email && <h2>{user.displayName}</h2>}
            <form className="mx-auto w-25 pb-3" onSubmit={handleEmailPassword}>
                
                <input className="form-control fs-4 px-5" type="email" onBlur={inputEmailHandle} name="email" placeholder="enter your email..."/>
                <br />
                <input className="form-control fs-4" type="password" onBlur={inputPasswordHandle} name="password" placeholder="enter your password"/>
                <br />
                <input className="form-control fs-4 form-submit" type="submit" value="Register" />
                <span className="text-danger">{error}</span>

            </form>
            <br /><br />
            <button onClick={handleGoogleLogIn} className="btn btn-outline-danger w-100 mx-auto">Google sign in</button>

            <p className="text-center">If you are a new user , go to <Link to="/register">Register Page</Link></p>
        </div>
    );
};

export default Login;