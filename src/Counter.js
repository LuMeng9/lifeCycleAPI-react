import React, { Component } from "react";

const Problematic = () => {
  throw new Error("Error occured!!!");
  return (
    <div>
      <p>Here is Error</p>
    </div>
  );
};

class Counter extends Component {
  state = {
    number: 0,
    error: false
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount (deprecated)");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextStates) {
    // if 5 times, not rerendering
    console.log("shouldComponentUpdate");
    if (nextStates.number % 5 === 0) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUpdate(nextProps, nextStates) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log("componentDidUpdate");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch func");
    this.setState({
      error: true
    });
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  handleDecrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  };

  render() {
    console.log("render");
    if (this.state.error) {
      return <h1>Oh, my God! I found Error!</h1>;
    }
    return (
      <div>
        <h1>Counter</h1>
        <div>result: {this.state.number}</div>
        {this.state.number === 4 && <Problematic />}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
