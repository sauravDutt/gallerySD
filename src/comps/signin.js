import React from 'react';

const Signin = () => {

    const showSigninArea = () => {
            document.getElementById('signinarea').style.display='block';
    }

    return (
        <form>
            <label className = "signin">
                <i class="far fa-user-circle"></i>
                <input 
                    type="button"
                    onClick={showSigninArea}
                />
            </label>
        </form>
    )
}

export default Signin;