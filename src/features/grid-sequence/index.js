import styled from "@emotion/styled";
import React, { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  .grid {
    display: grid;
    max-width: 300px;
    width: 100%;
    padding: 20px;
    gap: 20px;
    border: 1px solid #000;
  }
  .cell {
    background-color: transparent;
    border: 1px solid #000;
    height: 0;
    padding-bottom: 100%;
  }
  .cell-activated {
    background-color: green;
  }
`


const Cell = ({ isFilled, onClick, isDisabled, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={isFilled ? "cell cell-activated" : "cell"}
    />
  );
};

const GridSequence = () => {
  const [order, setOrder] = useState([]);
  const [isDeactvating, setDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deActivatingCells = () => {
    setDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = [...originalOrder]
        newOrder.pop();

        if(newOrder.length === 0) {
          clearInterval(timer);
          setDeactivating(false)
        }
        return newOrder
      })
    }, 400)
  }

  const activateCells = (index) => {
    const newOrder = [...order, index]
    setOrder(newOrder)

    if(newOrder.length === config.flat(1).filter(Boolean).length) {
      deActivatingCells();
    }
    // const newOrder = [...order, index];
    // setOrder(newOrder);

    // if(newOrder.length === config.flat(1).filter((x) => x).length) {
    //     deActivatingCells(index)
    // }
  };

  return (
    <Wrapper>
      <div
        className="grid"
        style={{
         gridTemplateColumns: "auto auto auto"
        }}
      >
        {config.flat(1).map((item, index) => {
          return item ?(
            <Cell
              key={index}
              label={`Cell ${index}`}
              isFilled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactvating}
            />
          ) : <span/>;
        })}
      </div>
    </Wrapper>
  );
};

export default GridSequence;
