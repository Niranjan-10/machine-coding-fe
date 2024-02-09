import React, { useState } from "react";
import Otp from "./otp";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleOnChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  };

  const onOtpSubmit= (otp) => {
    console.log("Loggedin successfully")
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {!showOtpInput ? (
          <>
            <input onChange={handleOnChange} value={phoneNumber} />
            <button type="submit">Submit</button>
          </>
        ) : (
          <Otp onSubmit={onOtpSubmit}/>
        )}
      </form>
    </div>
  );
};

export default PhoneNumber;
