import { useState } from "react";
import Navigation from "./components/Navigation";
const RenderMe = ({ nunber }) => {
  return (
    <div className="p-1 m-1" style={{ backgroundColor: "ButtonFace" }}>
      {nunber}
    </div>
  );
};
const ArrayStates = () => {
  const [value, setValue] = useState();
  const [list, setList] = useState([1, 3, 23, 4, 23, 432]);
  return (
    <div className="container my-4">
      <div className="container" style={{ border: "2px solid pink" }}>
        <div>State: </div>
        <div>{JSON.stringify(list)}</div>
      </div>
      <div className="container w-20">
        <input
          placeholder="add number"
          className="form-control my-3"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            setValue(0);
            setList([...list, Number(value)]);
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
      <div className="componet container">
        {list.map((item, key) => (
          <RenderMe key={key} nunber={item} />
        ))}
      </div>
    </div>
  );
};
export default ArrayStates;
