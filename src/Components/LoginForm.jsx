import React, { useState } from 'react';

const LoginForm = ({ handleLoginSubmit, setLoginMobileNumber, setLoginDialCode, setOtp, loginDialCode, loginMobileNumber, otp }) => {
  const [step, setStep] = useState(1);
  
  const isPhoneFormValid = loginMobileNumber.length>=9 && loginDialCode;
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
      {step === 1 ? (
        <div>
          <p className='sub-headings'>Enter Your Mobile Number</p>
          <p className='grey small'>We will send you 6 digit otp for verification</p>
        <input
          className='dial-code'
          type="text"
          value={loginDialCode}
          onChange={(e) => setLoginDialCode(e.target.value)}
          placeholder="Dial Code"
        />
        
        <input
          type="Number"
          value={loginMobileNumber}
          onChange={(e) => setLoginMobileNumber(e.target.value)}
          placeholder="Mobile Number"
          minLength="9"
        />
        <br />
        <button className="red-button" onClick={()=>setStep(2)} disabled={!isPhoneFormValid}>Send OTP</button>
        </div>
      ):(
        <div>
        <div  className='back-icon' onClick={()=>setStep(1)}>&#10554;</div>
        <br/>
        <p className='sub-headings'>OTP Verification</p>
        <p className='grey small'>Enter the OTP sent to your Mobile Number</p>
        
        <input
          type="Number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="OTP"
        />
        <div className='grey small'><small>Note: <i>bydefault otp is 123456</i> </small></div>
        <br/>
        <button className='red-button' type="submit">Verify</button>
        </div>
      )}
      </form>
    </div>
  );
};

export default LoginForm;
