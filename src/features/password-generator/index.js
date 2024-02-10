import React, { useState } from "react";
import { usePasswordGenerator } from "./hooks/use-password-hook";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import PasswordStrengthIndicator from "./components/strength-checker";
import styled from "@emotion/styled";

const Container = styled.div`
background-color: #24232b;
padding: 24px;

.header {
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #2a8b8b;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
}

.copyBtn {
  height: 30px;
  font-size: 10px;
}

.charlength {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 24px;
}

.charlength span {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
}

.checkboxes {
  display: grid;
  grid-template-columns: auto auto;
  font-size: 16px;
  font-weight: 700;
  color: white;
}

.checkboxes div {
  display: flex;
  gap: 5px;
  padding-bottom: 25px;
}

.generateBtn {
  width: 100%;
  font-size: 20px;
  padding: 20px;
}

.errorMessage {
  color: red;
  padding-bottom: 5px;
}

.password-strength {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  color: white;
}

`



const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <Container>
      {/* Password Text and Copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "Copied" : "copy"}
            onClick={handleCopy}
            customClass="copyBtn"
          />
        </div>
      )}
      {/* Character Length */}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <Checkbox
              key={index}
              title={checkbox.title}
              onChange={() => handleCheckboxChange(index)}
              state={checkbox.state}
            />
          );
        })}
      </div>
      {/* Strength */}
      <PasswordStrengthIndicator  password={password} />
      {/* Error Handling */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {/* Generate Button */}
      <Button
        text="Generate Password"
        onClick={() => generatePassword(checkboxData, length)}
        customClass="generateBtn"
      />
    </Container>
  );
};

export default PasswordGenerator;
