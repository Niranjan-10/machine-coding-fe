import React, { useEffect, useState } from 'react'
import useHook from '../pagination/utils';

const ProgressBar = ({value, onComplete}) => {
    const [percent, setPercent] = useState(20);

    useEffect(()=> {
      if(value) {
        setPercent(Math.min(100, Math.max(0, value)))
      }
    }, [value])


    // return (
    //     <div className="progress">
    //       <span
    //         style={{
    //           color: percent > 49 ? "white" : "black"
    //         }}
    //       >
    //         {percent.toFixed()}%
    //       </span>
    //       <div
    //         // style={{ width: `${percent}%` }}
    //         style={{
    //           transform: `scaleX(${percent / 100})`,
    //           transformOrigin: "left"
    //         }}
    //         role="progressbar"
    //       />
    //     </div>
    //   );

    return (
      <div className='progress'>
        <span className='level'>{percent}</span>
        <div
             aria-valuemin={0}
             aria-valuemax={100}
             aria-valuenow={percent}
            style={{
              transform: `scaleX(${percent/100})`,
              transformOrigin: 'left'
            }}
            className='progress-level'>
        </div>
      </div>
      )
}

export default ProgressBar