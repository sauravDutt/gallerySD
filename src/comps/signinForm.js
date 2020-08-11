import React from 'react';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';



const SigninFormArea = () => {

    const closesigninForm = () => {
        document.getElementById('signinarea').style.display = 'none';
    }

    const removeBtn = () => {
        document.getElementById('buttonSignin').style.display = 'none';
    }
    const showNotification = () => {
        document.getElementById('notificationBackdrop').style.display = 'block';
    }
    const showChat = () => {
        document.getElementById('chatBackdrop').style.display = 'block';
    }
    const showPost = () => {
        document.getElementById('postBackdrop').style.display = 'block';
    }
    const closeNotification = () => {
            document.getElementById('notificationBackdrop').style.display = 'none';
    }
    const closeChat = () => {
        document.getElementById('chatBackdrop').style.display = 'none';
    }
    const closePost = () => {
        document.getElementById('postBackdrop').style.display = 'none';
    }
    const welcomeUser = () => {
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('initial').style.display = 'none';   
        if (document.getElementById('userInfo').style.display === 'block') {
            removeBtn();
        }
    }
    const signout = () => {
        document.getElementById('userInfo').style.display = 'none';
        document.getElementById('initial').style.display = 'block';   
    }
    
    const [name, setName] = useState('');

    const responseGoogle = (response) => {
        setName(response.profileObj.name);
    }
    return (
        <div className="signinForm" id="signinarea">
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
                    <span id="initial">
                        <br />
                        <h2>Signin with Google</h2>
                        <p>Signin with Google and become a part of the Community!!</p>
                    </span>
                    <span 
                            id="userInfo"
                            style={{display:'none'}}
                        >
                            <br />
                        <h2>{name}</h2>
                        <hr style={{backgroundColor:'#9f70be9f', height:'5px', borderRadius:'20px'}}/>
                        <p>
                            <a 
                                href={'#notificationsBtn'}
                                style={{cursor:'pointer', textDecoration: 'none'}}
                                onClick={showNotification}
                            >
                                <i 
                                    class="fas fa-bell"
                                    style={{cursor:'pointer', fontSize:'20px', color:'#715086'}}
                                ></i>
                            </a>
                            <a 
                                href={'#chatBtn'}
                                style={{cursor:'pointer', textDecoration: 'none'}}
                                onClick={showChat}
                            >
                                <i 
                                    class="far fa-comment"
                                    style={{cursor:'pointer', fontSize:'20px', color:'#715086', marginLeft:'10px'}}
                                ></i>
                            </a>
                            <a 
                                href={'#postimgBtn'}
                                style={{cursor:'pointer', textDecoration: 'none'}}
                                onClick={showPost}
                            >
                                <i 
                                    class="fas fa-cart-plus"
                                    style={{cursor:'pointer', fontSize:'20px', color:'#715086', marginLeft:'10px'}}
                                ></i>
                            </a>
                            <a
                                href={'#signoutMainBtn'}
                                style={{cursor:'pointer', textDecoration: 'none'}}
                                onClick={signout}
                            >
                                <i 
                                    class="fas fa-sign-out-alt"
                                    style={{cursor:'pointer', fontSize:'20px', color:'#715086', float:'right', marginTop: '10px'}}
                                ></i>
                            </a>
                        </p>
                    </span>
                    <button
                        id="buttonSignin"
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
            <div 
                id = 'notificationBackdrop'
                className="backdrop-dashboard" 
            >

                <div 
                    className="notificationDiv" 
                    id='chatBtn'
                >
                    <a 
                        href={"#titleTop"}
                        className={"closeBtn"}
                        style={{cursor: 'pointer', float: 'right',marginRight:'20px', fontSize: '25px', color:'#691e9b'}}
                        onClick={closeNotification}
                    >
                        <i class="far fa-window-close"></i>
                    </a>
                    <h2
                        style={ { userSelect:'none', color: '#715086' }}
                    ><i 
                            class="fas fa-bell"
                            style={{color:'#715086'}}
                        ></i> Notifications</h2>
                        <p>There are no notifications.</p>
                </div>

            </div>
            <div 
                id = 'chatBackdrop'
                className="backdrop-dashboard" 
            >

                <div 
                    className="chatDiv" 
                    id='chatBtn'
                >
                    <a 
                        href={"#titleTop"}
                        className={"closeBtn"}
                        style={{cursor: 'pointer', float: 'right',marginRight:'20px', fontSize: '25px', color:'#691e9b'}}
                        onClick={closeChat}
                    >
                        <i class="far fa-window-close"></i>
                    </a>
                    <h2
                        style={ { userSelect:'none', color: '#715086' }}
                    ><i 
                            class="far fa-comment"
                            style={{color:'#715086'}}
                        ></i> Chat</h2>
                </div>

            </div>
            <div 
                id = 'postBackdrop'
                className="backdrop-dashboard" 
            >

                <div 
                    className="postDiv" 
                    id='postimgBtn'
                >
                    <a 
                        href={"#titleTop"}
                        className={"closeBtn"}
                        style={{cursor: 'pointer', float: 'right',marginRight:'20px', fontSize: '25px', color:'#691e9b'}}
                        onClick={closePost}
                    >
                        <i class="far fa-window-close"></i>
                    </a>
                    <h2
                        style={ { userSelect:'none', color: '#715086' }}
                    ><i 
                        class="fas fa-cart-plus"
                            style={{color:'#715086'}}
                        ></i> Post Art</h2>
                </div>

            </div>
        </div>
    )
}

export default SigninFormArea;