import React from 'react'

import './custom-button.style.scss'

const CustomButton=({isGoogleSignIn,children,...otherProps})=>{
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in':''}  custom-button`} {...otherProps}>
        {children}
        </button>
    )
}


export default CustomButton