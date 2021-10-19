import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth";


initializeAuthentication();

const useFireBase = () =>{
    const [user,setUser] = useState({});
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        setIsLoading(true);
       return signInWithPopup(auth,googleProvider)
            
            .catch(error => {
                setError(error.messege);
            })
            .finally(()=>{
                setIsLoading(false);
            });
    }
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
            .then(()=>{
                setUser({});
            })
            .finally(()=>{
                setIsLoading(false);
            });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
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
        isLoading,
        signInUsingGoogle,
        logOut,
        inputPasswordHandle,
        inputEmailHandle,
        handleEmailPassword};
}

export default useFireBase;