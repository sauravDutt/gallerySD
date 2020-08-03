import React from 'react';
import GoogleLogin from 'react-google-login';
import { motion } from 'framer-motion';


const SigninFormArea = () => {

    
    const closesigninForm = () => {
        document.getElementById('signinarea').style.display = 'none';
    }
    const responseGoogle = (response) => {
        console.log(response.profileObj);
    }
    return (
        <div className="signinForm" id="signinarea"
        >
            <a 
                className="closeBtn"
                style={{cursor: 'pointer', float: 'right', fontSize: '25px', color:'#691e9b'}}
                onClick={closesigninForm}
            >
                <i class="far fa-window-close"></i>
            </a>
            
            <div className="signinOptions">
                <div className="signinBtn">
                    <br />
                    <h2>Signin with Google</h2>
                    <p>Signin with Google and become a part of the Community!!</p>
                        <GoogleLogin 
                            clientId={'1035086583509-rntbhhj3p6qdecj9ijek466i2adqk6r5.apps.googleusercontent.com'}
                            buttonText="Signin"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                </div>
            </div>
            {/* <div className='welcomeUser'>
                <h2>{}</h2>
            </div> */}
        </div>
    )
}

export default SigninFormArea;