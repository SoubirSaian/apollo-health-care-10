import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth";


initializeAuthentication();

const useFireBase = () =>{
    const [user,setUser] = useState({});
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth,googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.messege);
            });
    }
    const logOut = () =>{
        signOut(auth)
            .then(()=>{
                setUser({});
            });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
        });
    },[]);

    const inputPasswordHandle = e =>{
        setPassword(e.target.value);
    }

    const inputEmailHandle = e =>{
        setEmail(e.target.value);
    }

    const handleEmailPassword = e =>{
        e.preventDefault();

        console.log(email,password);
        if(password.length < 6){
            setError('password must bt at least 6 character');
            return;
        }  

        createUserWithEmailAndPassword(auth,email,password)
            .then(result =>{
                const user=result.user;
                setUser(user);
                console.log(user);
                setError('');
            })
            .catch(error =>{
                setError(error.messege);
            });
        
    }

    return{user,
        error,
        signInUsingGoogle,
        logOut,
        inputPasswordHandle,
        inputEmailHandle,
        handleEmailPassword};
}

export default useFireBase;