import React, {useState} from 'react';
import Button from '../../Components/Button';

// React has state handling
// Hooks


export default function (props) {
  const [num, setNum] = useState(0);
  return (
    <section>
      <h1>Home</h1>
      <div className="home-div">
        <h2>My name is {props.myname}</h2>
        <p>{num}</p>
        <Button label="Click Me!" whenClicked={() => setNum(num+1)} />
      </div>  
    </section>
  );
}