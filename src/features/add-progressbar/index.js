import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./progress-bar";
import { useReducer } from "react";

const AddProgressBar = () => {
  const [progressBars, setProgressBar] = useState([]);

  const checkCurrentlyRunning = () => {
    let onProgressBars = progressBars.filter(
      (item) => item?.start && !item?.completed
    );

    return onProgressBars.length < 1;
  };

  const handleClick = () => {
    let noOfrRunning = checkCurrentlyRunning();

    setProgressBar([
      ...progressBars,
      {
        start: noOfrRunning ? true : false,
        id: new Date().getTime().toString(),
        completed: false,
      },
    ]);
  };


  useEffect(() => {
    const startNextProgressBar = () => {
      let pendingProgressBars = progressBars.filter(
        (item) => !item?.start && !item?.completed
      );
      
      if(pendingProgressBars.length && checkCurrentlyRunning()) {
        let updatedList = progressBars;
        let index = updatedList.findIndex(item => item.id === pendingProgressBars[0]?.id);
        updatedList[index] = {...updatedList[index], start: true}
        setProgressBar([...updatedList])
      }
    }

    if(progressBars.length) {
      startNextProgressBar()
    }
  }, [progressBars])

  const handleOnComplete = (id) => {
    setProgressBar((prev) => {
      let updatedList = prev;
      let index = updatedList.findIndex((item) => item.id === id);
      updatedList[index] = {
        ...updatedList[index],
        completed: true,
        start: false,
      };

      return [...updatedList]
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <div>
        {progressBars?.map((item, index) => (
          <ProgressBar
            key={index}
            id={item.id}
            start={item?.start}
            handleOnComplete={handleOnComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default AddProgressBar;
