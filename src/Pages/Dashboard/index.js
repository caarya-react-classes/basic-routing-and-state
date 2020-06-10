import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';

export default function (props) {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState('');
  const [clicked, setClicked] = useState(false);

  const whenClicked= (t) => {
    setArr([...arr, t]);
    setClicked(!clicked);
  };

  useEffect(() => {
    setText('');
  }, [arr]);

  useEffect(() => {
    console.log("Log clicked: ",clicked);
  }, [clicked]);

  return (
    <div>
      {
        Array.isArray(arr) && arr.length !== 0 ?
          arr.map((item,index) => {
            return <p key={index}>{item}</p>;
          })
        :
          null
      }
      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
      <Button whenClicked={() => whenClicked(text)} label="Submit" />
    </div>
  );
}