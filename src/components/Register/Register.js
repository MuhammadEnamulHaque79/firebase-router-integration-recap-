import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <br />
                <input type="email" name="email" placeholder='Enter Your Email' id="" />
                <br />
                <input type="password" name="password" placeholder='Password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;