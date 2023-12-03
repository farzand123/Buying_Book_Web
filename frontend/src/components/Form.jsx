import { useState } from "react";

const Form = () => {
  const [state, setState] = useState({ color: "", date: "", email: "" });
  return (
    <div className="container my-4">
      <div className="container">{JSON.stringify(state)}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // call api
        }}
      >
        <div className="d-flex justify-content-around">
          <span>Color</span>{" "}
          <input
            value={state.color}
            onChange={(e) => {
              setState({ ...state, color: e.target.value });
            }}
            type="color"
            required={true}
          />
        </div>
        <div className="d-flex justify-content-around">
          <span>Date</span>{" "}
          <input
            value={state.date}
            onChange={(e) => {
              setState({ ...state, date: e.target.value });
            }}
            type="date"
            required={true}
          />
        </div>
        <div className="d-flex justify-content-around">
          <span>Email</span>{" "}
          <input
            value={state.email}
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
            type="email"
            required={true}
          />
        </div>
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};
export default Form;
