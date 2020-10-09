import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";

class App extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    start: "Start",
  };
  startClick = () => {
    if (this.state.start === "Start") {
      this.setState({ start: "Stop" });
      this.timerID = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
        if (this.state.seconds === 59) {
          this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
        }
        if (this.state.seconds === 59 && this.state.minutes === 59) {
          this.setState({
            hours: this.state.hours + 1,
            minutes: 0,
            seconds: 0,
          });
        }
      }, 1000);
    } else {
      this.setState({ start: "Start" });
      clearInterval(this.timerID);
    }
  };
  resetClick = () => {
    this.setState({ seconds: 0, minutes: 0, hours: 0, start: "Start" });
    clearInterval(this.timerID);
  };

  render() {
    return (
      <>
        <Navbar />
        <MainContent
          seconds={this.state.seconds}
          minutes={this.state.minutes}
          hours={this.state.hours}
          start={this.state.start}
          startClick={this.startClick}
          resetClick={this.resetClick}
        />
        <Footer />
      </>
    );
  }
}
export default App;
