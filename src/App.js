import React, { Component } from "react";
import "./App.css";
import profile from "./profile.jpg";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Turki Ahmed",
      imgSrc: <img src={profile} alt="profile" width="20%" />,
      bio:
        "computer science engineering",
      profession: "Future full stack web developer",

      show: "true",
      count: 0,
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    console.log("component didMount App");
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <div className="Profile">
          <div>
            <div className="show">
              <h1>{this.state.show ? this.state.name : null}</h1>
              <h2> {this.state.show ? this.state.imgSrc : null}</h2>
              <h3> {this.state.show ? this.state.bio : null}</h3>
              <h4> {this.state.show ? this.state.profession : null}</h4>

              <button id='btnn' onClick={this.toggle}>
                {this.state.show ? "hide" : "start"}
              </button>
              <p> Count :{count}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
