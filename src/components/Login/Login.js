import React from 'react';
import useFirebase from '../hooks/useFirebase';


const Login = () => {
    const{signInWithGoogle}=useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="email" placeholder='Enter Your Email' id="" />
                <br />
                <input type="password" name="password" placeholder='Password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;