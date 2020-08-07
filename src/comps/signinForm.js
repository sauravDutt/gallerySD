import React from 'react';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';


const SigninFormArea = () => {

    
    const closesigninForm = () => {
        document.getElementById('signinarea').style.display = 'none';
    }

    const welcomeUser = () => {
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('initial').style.display = 'none';
    }

    const [name, setName] = useState('');

    const responseGoogle = (response) => {
        setName(response.profileObj.name);
    }
    return (
        <div className="signinForm" id="signinarea"
        >
            <a 
                href={"#titleTop"}
                className={"closeBtn"}
                style={{cursor: 'pointer', float: 'right', fontSize: '25px', color:'#691e9b'}}
                onClick={closesigninForm}
            >
                <i class="far fa-window-close"></i>
            </a>
            
            <div className="signinOptions" id="signinoptionId">
                <div className="signinBtn">
                    <br />
                    <span id="initial">
                    <h2>Signin with Google</h2>
                    <p>Signin with Google and become a part of the Community!!</p>
                    </span>
                    <span id="userInfo"
                        style={{display:'none'}}
                    >
                    <h2>{name}</h2>
                    <hr style={{backgroundColor:'#9f70be9f', height:'5px', borderRadius:'20px'}}/>
                    <p>
                        <i 
                            class="fas fa-bell"
                            style={{cursor:'pointer', fontSize:'20px', color:'#715086'}}
                        ></i>
                        <i 
                            class="far fa-comment"
                            style={{cursor:'pointer', fontSize:'20px', color:'#715086', marginLeft:'10px'}}
                        ></i>
                        <i 
                            class="fas fa-cart-plus"
                            style={{cursor:'pointer', fontSize:'20px', color:'#715086', marginLeft:'10px'}}
                        ></i>
                    </p>
                    </span>
                    <button
                        style={{cursor: 'pointer', border: 'none', backgroundColor: 'transparent'}}
                        onClick={welcomeUser}
                    >
                        <GoogleLogin 
                            clientId={'1035086583509-rntbhhj3p6qdecj9ijek466i2adqk6r5.apps.googleusercontent.com'}
                            buttonText="Signin"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SigninFormArea;