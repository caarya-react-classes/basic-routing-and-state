import React from 'react';

class A extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        hello world
        {this.props.children}
      </div>
    );
  }
}

class C extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        hello world
        <A>
          <B/>
        </A>
        <B/>
      </div>
    );
  }
}

function B (props) {
  return (
    <div>
      Hello wor
    </div>
  );
}

export { A, B };