import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({ isGoogleSignIn, inverted, children, ...otherProps }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`} {...otherProps}>
            {children}
        </button>
    )
}


export default CustomButton