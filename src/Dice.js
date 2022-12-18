import React, { Component } from "react";
import dice1 from "./assets/dice.png";
import dice2 from "./assets/dice-result-two.png";
import dice3 from "./assets/dice-roll.png";
import dice4 from "./assets/die-face.png";
import dice5 from "./assets/dice (1).png";
import dice6 from "./assets/die-face (1).png";

const array = [dice1, dice2, dice3, dice4, dice5, dice6];

class Dice extends Component {
  state = {
    imageIndex: "",
    imageIndex1: "",
  };

  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * array.length);
    this.setState({ imageIndex: randomNumber });
  };

  handleClick1 = () => {
    console.log(this.state);
    const randomNumber = Math.floor(Math.random() * array.length);
    this.setState({ imageIndex1: randomNumber });
  };

  componentDidMount() {
    this.handleClick();
    this.handleClick1();

    document.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        this.handleClick();
        this.handleClick1();
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="con" onClick={this.handleClick}>
          <img
            alt="image1"
            src={array[this.state.imageIndex]}
            width="100%"
            height="100%"
          />
        </div>
        <div className="con" onClick={this.handleClick1}>
          <img
            alt="image1"
            src={array[this.state.imageIndex1]}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
}

export default Dice;
