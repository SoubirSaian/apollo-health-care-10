import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

    //    useFireBase component 

initializeAuthentication();

const useFireBase = () =>{
    const [user,setUser] = useState({});
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // input password handling
    const inputPasswordHandle = e =>{
        setPassword(e.target.value);
    }

    // input email handling 
    const inputEmailHandle = e =>{
        setEmail(e.target.value);
    }

    // google sign in handling 
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

    // email password log in handling 
    const logInUsingEmailAndPassword = (e) => {
        
        e.preventDefault();
        
        setIsLoading(true);

       signInWithEmailAndPassword(auth,email,password)
         .then(result => {
             setUser(result.user);
             return true;
         })
          .catch(error => {
              setError(error.messege);
          })
          .finally(()=>{
              setIsLoading(false);
          })
    }

    // sign out handling 
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

    // auth observer 
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
 

    // register user using email & password handler 
    const handleEmailPassword = e =>{
        e.preventDefault();

        // password validation 
        if(password.length < 6){
            setError('password must bt at least 6 character');
            return;
        }  

        createUserWithEmailAndPassword(auth,email,password)
            .then(result =>{
                const user=result.user;
                setUser(user);
                // console.log(user);
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
        handleEmailPassword,
        logInUsingEmailAndPassword
    };
}

export default useFireBase;