import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 12,
      array: [],
    };
  }
  // Lifecycle Component
  componentDidMount() {
    console.log("Api request here ");
  }
  componentWillMount() {
    console.log("UNSAFE");
  }
  componentWillUnmount() {
    console.log("SAFE");
    console.log("API REQUEST TO BE SENT BEFORE IT UNMOUNTS");
    console.log("THIS IS CALLED BEFORE YOUR COMPONENT UNMOUNTS");
  }
  componentDidUpdate() {
    // State changes  or the Props changes
    console.log("THIS ONE RUNS WHENEVER STATE OR PROPS CHANGE");
  }

  render() {
    return (
      <section>
        <button onClick={() => this.setState({num: this.state.num+1})}>Increase</button>
        <p>{this.state.num}</p>
        <h1>404, page not found. {this.props.yourname}</h1>
      </section>
    );
  }
}

export default MyComponent;