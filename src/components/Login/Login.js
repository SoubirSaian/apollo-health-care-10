import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const {signInUsingGoogle,error,inputPasswordHandle,inputEmailHandle,handleEmailPassword} = useAuth();
    
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
        <div className="m-5 login-page">
            <h2 className="text-center">Please <span className="text-danger">Log In</span> for better experience</h2>

            <form className="mx-auto w-25 pt-5" onSubmit={handleEmailPassword}>
                
                <input className="form-control fs-4 px-5" type="email" onBlur={inputEmailHandle} name="email" placeholder="enter your email..."/>
                <br />
                <input className="form-control fs-4" type="password" onBlur={inputPasswordHandle} name="password" placeholder="enter your password"/>
                <br />
                <input className="form-control fs-4 form-submit" type="submit" value="Log in" />
                

            </form>
            <br />
            <br /><br />
           <div className="google-login">
               <span className="text-danger">{error}</span>
               <h3 className="text-center">Or</h3>
               
               <br />
                <button onClick={handleGoogleLogIn} className="btn btn-outline-danger w-100 mx-auto fs-4 mb-3">Google sign in</button>

                <h5 className="text-center">
                    If you are a new user , go to
                     <Link to="/register"> Register Page</Link>
                </h5>
           </div>
        </div>
    );
};

export default Login;