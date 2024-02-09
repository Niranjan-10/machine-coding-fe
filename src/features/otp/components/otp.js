import React, { useState, useRef, useEffect } from 'react'

const Otp = ({length=4, onSubmit}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""))
  const inputRefs = useRef([]);

  useEffect(() => {
    if(inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [])

  const handleOnChange =(e, index)=> {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combineOtp = newOtp.join("")

    if(combineOtp.length === length){
      onSubmit(combineOtp)
    }
    
    // move to next input if current field is filled
    if(value && index < length-1 && inputRefs.current[index+1]){
      inputRefs.current[index+1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if(e.key === "Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]) {
      inputRefs.current[index-1].focus()
    }
  }

  const handleClick = (e, index) => {
   inputRefs.current[index].setSelectionRange(1, 1)
  }

  return (
    <div>
      {
        otp?.map((item, index) =>{
          return <input key={index} 
            type='text'
            ref={(input)=> inputRefs.current[index] = input }
            onChange={(e)=> handleOnChange(e, index)} 
            onKeyDown={(e) => handleKeyDown(e, index)} 
            onClick={(e) => handleClick(e, index)}
            className="otpInput"
            />
        })
      }
    </div>
  )
}

export default Otp