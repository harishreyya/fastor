import React from 'react';

const RegisterForm = ({ handleRegisterSubmit, setRegisterMobileNumber, setRegisterDialCode, registerDialCode, registerMobileNumber }) => {
  return (
    <div>
      
      <form onSubmit={handleRegisterSubmit}>
      <p className='sub-headings'>Enter Your Mobile Number</p>
        <p className='grey small'>We will register you and redirect to login for otp verification</p>
        <input
        className='dial-code'
          type="text"
          value={registerDialCode}
          onChange={(e) => setRegisterDialCode(e.target.value)}
          placeholder="Dial Code"
        />
        

        <input
          type="text"
          value={registerMobileNumber}
          onChange={(e) => setRegisterMobileNumber(e.target.value)}
          placeholder="Mobile Number"
        />
        <br />
        <button className="red-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
