import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = { todo: ["open the app", "delete the app"] };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        {JSON.stringify(this.state)}
        Say Hi from class
        <button
          onClick={() => {
            this.setState({
              todo: ["open the app", "delete the app", "something more"],
            });
          }}
        >
          On Click
        </button>
      </React.Fragment>
    );
  }
}
export default Todo;
