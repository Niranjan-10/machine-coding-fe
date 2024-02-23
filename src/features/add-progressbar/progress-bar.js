import React, { useEffect, useState } from "react";

const ProgressBar = ({start, handleOnComplete, id}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(start) {
      let timer =setInterval(() => {
        setValue((prev) => {

          if(prev >=100) {
            handleOnComplete(id)
            clearInterval(timer)
            return 100
          }
          return prev + 10
        });
    }, 100)
    }
  }, [start]);

  return (
    <div>
      <input type="range" min={0} max={100} value={value} />
    </div>
  );
};

export default ProgressBar;
