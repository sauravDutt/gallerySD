import React from 'react';

const Signin = ({setShowInfo}) => {

    const handleClick = () => {
        setShowInfo(1);
    }

    return (
        <form>
            <label className = "signin">
                <i class="fas fa-info-circle"></i>
                <input 
                    type="button"
                    onClick={handleClick}
                />
            </label>
        </form>
    )
}

export default Signin;