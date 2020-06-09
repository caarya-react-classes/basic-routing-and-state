import React from 'react';
import Button from '../Button';

export default function (props) {
  return (
    <div className="container">
      <div className="row">
        <nav>
          <Button label="Something" whenClicked={() => console.log("Hello")} />
        </nav>
      </div>
      <div className="row">
        {props.children}
      </div>
      <div className="row">
        <div className="col">
          {/* Footer */}
          Hi
        </div>
        <div className="col">
          {/* Ads */}
          Hello
        </div>
      </div>
    </div>
  );
}