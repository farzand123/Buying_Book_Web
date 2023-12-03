import { useState } from "react";

const States = () => {
  const [value, setValue] = useState("this is default");
  const [values, setValues] = useState({ value1: "", value2: "", value3: "" });
  return (
    <div className="p-5">
      This is Text field
      <div>
        {JSON.stringify(values)}
        <div className="container my-3">
          <input
            value={values.value1}
            onChange={(e) => {
              setValues({ ...values, value1: e.target.value });
            }}
            className="form-control "
            type="text"
            placeholder="Write something"
          />
        </div>

        <div className="container my-3">
          <input
            value={values.value2}
            onChange={(e) => {
              setValues({ ...values, value2: e.target.value });
            }}
            className="form-control "
            placeholder="Write something"
            type="text"
          />
        </div>

        <div className="container my-3">
          <input
            value={values.value3}
            onChange={(e) => {
              setValues({ ...values, value3: e.target.value });
            }}
            className="form-control "
            placeholder="Write something"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
export default States;
