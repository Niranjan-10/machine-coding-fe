import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ProgressBar from "./progress-bar";

let Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;

    .progress {
      border: 1px solid black;
      height: 20px;
      width: 600px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    // .progress-level {
    //   background-color: #00c251;
    //   color: #fff;
    //   height: 100%;
    //   text-align: center;
    // }

    .level {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      z-index: 10;
    }

    // .progress {
    //     position: relative; /* with scale */
    //     height: 20px;
    //     width: 500px;
    //     background-color: rgb(233, 236, 239);
    //     border: 1px solid #c5c5c5;
    //     border-radius: 15px;
    //     overflow: hidden;
    //   }
      
    //   .progress div {
    //     background-color: #00c251;
    //     color: #fff;
    //     height: 100%;
    //     text-align: center;
    //   }
      
    //   .progress span {
    //     position: absolute;
    //     width: 100%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     z-index: 99;
    //   }


`



function ProgressBarContainer() {
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false)

    useEffect(()=> {
       let interval = setInterval(()=>{
            setValue((value)=> value+1)
        }, 100)

        return () => {
          clearInterval(interval)
        }
    }, [])

    return (
    <Container>
        <span>Progress Bar</span>
        <ProgressBar value={value} onComplete={() => setSuccess(true)} />
        <span>{success ? "Complete!" : "Loading..."}</span>
    </Container>)

}

export default ProgressBarContainer
