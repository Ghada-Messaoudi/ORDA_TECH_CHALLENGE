import React, { Component } from "react";
import "./seconds-styles.css";
import Clock from "react-clock";

class Seconds extends Component {
  constructor() {
    super();
    this.state = { time: new Date(), log: "" };
  }

  fizzBuzz(seconds) {
    if (seconds % 5 === 0 && seconds % 3 === 0) {
      this.setState({ log: "FizzBuzz" });
    } else if (seconds % 5 === 0) {
      this.setState({ log: "Buzz" });
    } else if (seconds % 3 === 0) {
      this.setState({ log: "Fizz" });
    } else{
      this.setState({ log: "" });
    }
  }

  componentDidMount() {
    this.tik = setInterval(() => {
      this.setState({ time: new Date() });
      this.fizzBuzz(this.state.time.getSeconds());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tik);
  }

  render() {
    const { time, log } = this.state;

    return (
      <div className="containerClock">
        <Clock value={this.state.time} />
        <div>
          {time.getSeconds()}
          {/* toLocaleTimeString */}
        </div>
        <div className="FizzBuzz">{log}</div>
      </div>
    );
  }
}

export default Seconds;
