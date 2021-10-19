import React from 'react';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const {user,signInUsingGoogle} = useAuth();
    // console.log(user);
    return (
        <div className="m-5">
            {user.email && <h2>{user.displayName}</h2>}
            <button onClick={signInUsingGoogle} className="btn btn-outline-danger w-100 mx-auto">Google sign in</button>
        </div>
    );
};

export default Login;