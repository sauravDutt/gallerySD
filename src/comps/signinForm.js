import React from 'react';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';


const SigninFormArea = () => {

    
    const closesigninForm = () => {
        document.getElementById('signinarea').style.display = 'none';
    }

    const [name, setName] = useState('');

    const responseGoogle = (response) => {
        setName(response.profileObj.name);
    }
    return (
        <div className="signinForm" id="signinarea"
        >
            <a 
                href={"#signinID"}
                className={"closeBtn"}
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
                    <h2>{name}</h2>
                    <hr 
                        style={{color:'#691e9b'}}
                    />
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
                <h2>{name}</h2>
                <hr />

            </div> */}
        </div>
    )
}

export default SigninFormArea;