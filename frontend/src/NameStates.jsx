import { useState } from "react";
import Navigation from "./components/Navigation";
const RenderMe = ({ index, name }) => {
  return (
    <>
      {name.includes("a") && index % 2 == 0 && (
        <div className="p-1 m-1" style={{ backgroundColor: "ButtonFace" }}>
          {index}.
          <span className="mx-3" style={{ fontSize: "26px" }}>
            {name}
          </span>
        </div>
      )}
    </>
  );
};
const Render = ({ index, name }) => {
  return (
    <>
      {index % 2 == 0 ? (
        <div className="p-1 m-1" style={{ backgroundColor: "lightsalmon" }}>
          {index}.
          <span className="mx-3" style={{ fontSize: "26px" }}>
            {name}
          </span>
        </div>
      ) : (
        <div className="p-1 m-1" style={{ backgroundColor: "lightblue" }}>
          {index}.
          <span className="mx-3" style={{ fontSize: "26px" }}>
            {name}
          </span>
        </div>
      )}
    </>
  );
};
const StylingRendering = ({ index, name }) => {
  return (
    <>
      <div
        className="p-1 m-1"
        style={{
          backgroundColor: index % 2 == 0 ? "lightsalmon" : "lightblue",
        }}
      >
        {index}.
        <span className="mx-3" style={{ fontSize: "26px" }}>
          {name}
        </span>
      </div>
    </>
  );
};

const NameStates = () => {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);
  return (
    <div className="container my-4">
      <div className="container" style={{ border: "2px solid pink" }}>
        <div>State: </div>
        <div>{JSON.stringify(list)}</div>
      </div>
      <div className="container w-20">
        <input
          placeholder="add name"
          className="form-control my-3"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            setValue("");
            setList([...list, value]);
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
      <div className="componet container">
        {list.map((item, index) => (
          <StylingRendering key={index} index={index + 1} name={item} />
        ))}
      </div>
    </div>
  );
};
export default NameStates;
