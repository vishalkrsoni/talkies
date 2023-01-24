import React from 'react'
import './LoginScreen.css'
import loginLogo from '../../LogoImages/mylogo.png'

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img 
                className='loginScreen__logo'
                src={loginLogo}
                alt='loginScreen__logo' 
            />
            <button 
                className='loginScreen__btn'
                // onClick={() => setSignIn(true)}
            >
                Sign In
            </button>

            <div className='loginScreen__gradient' />
        </div> </div> 
        

  )
}

export default LoginScreen
