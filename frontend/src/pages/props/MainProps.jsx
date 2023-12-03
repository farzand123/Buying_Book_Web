import React, { useState } from "react";

const GameChanger = ({ setArrayData, length }) => {
  const [value, setValue] = useState();

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          setArrayData([...Array(length)].map((item) => value));
        }}
      >
        {" "}
        Change{" "}
      </button>
    </>
  );
};
const Ball = ({ array, index, color = "black", ballCount, setArrayData }) => {
  return (
    <>
      <div
        style={{
          borderRadius: "50px",
          width: "50px",
          alignItems: "baseline",
          textAlign: "center",
          height: "50px",
          backgroundColor: color,
          color: "white",
          cursor: "grab",
        }}
        onClick={() => {
          const newArray = [...array];

          for (let i = 0; i < newArray.length; i++) {
            if (index == i) {
              newArray[i] = Number(newArray[i] + 1);
            }
          }
          setArrayData(newArray);
        }}
      >
        {ballCount}
      </div>
    </>
  );
};

const MainProps = () => {
  const [array, setArrayData] = useState([0, 0, 0, 0, 0, 0]);
  return (
    <>
      <div className="container">Main Data {JSON.stringify(array)}</div>
      {array.map((item, index) => (
        <Ball
          key={index}
          index={index}
          array={array}
          ballCount={item}
          setArrayData={setArrayData}
        />
      ))}

      <GameChanger length={array.length} setArrayData={setArrayData} />
    </>
  );
};
export default MainProps;
