import React from "react";

const Die = (props) => {
  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <>
      <div
        onClick={() => props.holdDice(props.id)}
        style={style}
        className="flex items-center justify-center shadow-xl h-[100px] w-[100px] rounded-lg cursor-pointer"
      >
        {props.value}
      </div>
    </>
  );
};

export default Die;
