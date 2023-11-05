import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [registerMobileNumber, setRegisterMobileNumber] = useState('');
  const [registerDialCode, setRegisterDialCode] = useState('');
  const navigate = useNavigate()

  const handleRegisterSubmit = async (e) => {
   
    e.preventDefault();
        try {
          const response = await fetch('https://staging.fastor.in/v1/pwa/user/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone: registerMobileNumber, dial_code: registerDialCode }),
          });
          const data = await response.json();
          
          if(data.status_code===400){
            alert("please enter correct mobile number")
          }else if(data.status_code===200){
            alert("succesfully registered")
            navigate("/");
          }
        } catch (error) {
          console.error('Error occurred during registration:', error);
        }
  };

  return (
    <div className='login-wrapper'>
      <div>
      <div className='location-wrap'>
      <h2>REGISTER</h2> <br />
      <img className="fastor-logo" src="https://static.startuptalky.com/2021/05/fastor-logo-startuptalky.jpg" alt="" />
      </div>

      <RegisterForm
        handleRegisterSubmit={handleRegisterSubmit}
        setRegisterMobileNumber={setRegisterMobileNumber}
        setRegisterDialCode={setRegisterDialCode}
        registerDialCode={registerDialCode}
        registerMobileNumber={registerMobileNumber}
          />
          <p className='redirect-register small'>Already registered? please <Link to={"/"}><span className='linked-words'>Login</span></Link></p>
          </div>
    </div>
  );
};

export default RegisterPage;
