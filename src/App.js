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
    this.setState({start : "stop"})
    setInterval(
      () => this.setState({ seconds: this.state.seconds + 1}),
      1000
    );
    if(this.state.seconds==60){setInterval(
      () => this.setState({ minutes: this.state.minutes + 1 }),
      1000
    );}
  };
  resetClick = () =>
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
    });

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
