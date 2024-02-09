import React, { useState } from "react";

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
        setOrder((originOrder) => {
            const newOrder = [...originOrder]
            newOrder.pop()

            if (newOrder.length === 0) {
                clearInterval(timer);
                setDeactivating(false);
            }
            return newOrder
        })
    }, 300)
  }

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if(newOrder.length === config.flat(1).filter((x) => x).length) {
        deActivatingCells(index)
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: "auto auto auto",
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
    </div>
  );
};

export default GridSequence;
