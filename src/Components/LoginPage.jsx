import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ setToken }) => {
  const [loginMobileNumber, setLoginMobileNumber] = useState('');
  const [loginDialCode, setLoginDialCode] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
            try {
              const response = await fetch('https://staging.fastor.in/v1/pwa/user/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone: loginMobileNumber, dial_code: loginDialCode, otp }),
              });
              const data = await response.json();
              if(data.status_code === 500){
                navigate("/register")
                alert('user not exist please register!')
              }else if(data.status_code === 200){
                navigate("/restaurants")
                setToken(data.data.token)
                localStorage.setItem("token",data.data.token)
              }
            } catch (error) {
              console.error('Error occurred during login:', error);
            }
  };

  return (
    <div className='login-wrapper'>
        <div>
        <div className='location-wrap'>
      <h2>LOGIN</h2> <br />
      <img className="fastor-logo" src="https://static.startuptalky.com/2021/05/fastor-logo-startuptalky.jpg" alt="" />
      </div>
      <LoginForm
        handleLoginSubmit={handleLoginSubmit}
        setLoginMobileNumber={setLoginMobileNumber}
        setLoginDialCode={setLoginDialCode}
        setOtp={setOtp}
        loginDialCode={loginDialCode}
        loginMobileNumber={loginMobileNumber}
        otp={otp}
        setToken={setToken}
        />
      <p className='redirect-register small'>New here? please <Link to={"/register"}><span className='linked-words'>Register</span></Link></p>
        </div>
    </div>
  );
};

export default LoginPage;
