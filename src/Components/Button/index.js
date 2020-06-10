import React from 'react';
// After all your imports
// You can import your style.css file

import './style.css';

export default function (props) {
  return (
    <button className="hello-button" onClick={props.whenClicked}>{props.label}</button>
  );
}