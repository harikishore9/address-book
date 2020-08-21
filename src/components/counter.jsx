import React, { Component } from "react";

class Counter extends Component {
  state = {
    items: [1, 2, 3],
  };

  testEvent = (data, evt) => {
    alert("Data >> " + data + " >> " + evt.target.innerHTML);
  };
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "blue" }}>Hello World</h1>
        <button
          onClick={(event) => this.testEvent(10, event)}
          className="btn btn-primary btn-md m-2"
        >
          Sample
        </button>
        <ul>{this.state.items}</ul>
      </React.Fragment>
    );
  }
}

export default Counter;
