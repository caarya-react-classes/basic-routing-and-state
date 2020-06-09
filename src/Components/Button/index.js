import React from 'react';

export default function (props) {
  return (
    <button className="hello-button" onClick={props.whenClicked}>{props.label}</button>
  );
}