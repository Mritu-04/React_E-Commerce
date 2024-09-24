// // src/components/GoogleAuth.js
// import React from "react";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// const GoogleAuth = () => {
//   const handleLoginSuccess = (credentialResponse) => {
//     console.log("Login Success:", credentialResponse);
//     // Here you can handle the response, like sending the token to your backend
//   };

//   const handleLoginError = () => {
//     console.log("Login Failed");
//   };

//   return (
//     <GoogleOAuthProvider clientId="996388759198-ejpnmkg4g3mditdbfb9n8kh6o4lgjl7r.apps.googleusercontent.com">
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <GoogleLogin
//           onSuccess={handleLoginSuccess}
//           onError={handleLoginError}
//           buttonText="Login with Google"
//         />
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleAuth;
// import React,{ useEffect, useState } from 'react';
// import Home from './src/pages/Home.jsx';
// // import React { useEffect, useState } from "react";
// import {auth,provider} from "./config";
// import {signInWithPopup} from "firebase/auth";
// import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';

// const GoogleAuth = () => {
//   const clientId = '996388759198-ejpnmkg4g3mditdbfb9n8kh6o4lgjl7r.apps.googleusercontent.com';

//   const onSuccess = (response) => {
//     console.log('Login Success:', response.profileObj);
//     // Handle login success, e.g., send the token to your backend
//   };

//   const onFailure = (response) => {
//     console.log('Login Failed:', response);
//     // Handle login failure
//   };

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <GoogleLogin
//         onSuccess={onSuccess}
//         onError={onFailure}
//       />
//     </GoogleOAuthProvider>
//   );
// };

import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import googleLogo from '../images/google_13170545.png'; 
function GoogleAuth(){
  const [value,setValue] = useState('')
  const handleClick =()=>{
      signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
          navigate('/home');
      })
  }

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
    }}>
        <button 
            onClick={handleClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#357AE8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
            <img src={googleLogo} alt="Google Logo" style={{ width: '30px', height: '30px' }} />
        </button>
    </div>
);
}

export default GoogleAuth;

