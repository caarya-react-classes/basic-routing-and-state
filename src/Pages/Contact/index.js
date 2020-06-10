import React from "react";
import Button from "../../Components/Button";
// JavaScript to give you functions like
// Array map

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myArr: [
        {
          value: "My Value",
        },
        {
          value: "Your Value",
        },
      ],
      text: "",
    };
  }

  whenClicked = (text) => {
    console.log("this text here", text);
    this.setState(
      {
        myArr: [...this.state.myArr, { value: text }],
      },
      () => {
        this.setState({ text: "" });
      }
    );
  };

  render() {
    // Don't do any heavy calculations
    // O(n^2) loops
    // It is called every state or UI update cycle
    // React.Component -> if a React.Component has children
    // It will rerender if any of the children components rerender
    return (
      <div>
        {this.state.myArr.map((item) => {
          return <p>{item.value}</p>;
        })}
        {/* <p>My Value</p>
        <p>Your Value</p> */}
        <input
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <Button
          label="Submit"
          whenClicked={() => this.whenClicked(this.state.text)}
        />
      </div>
    );
  }
}
