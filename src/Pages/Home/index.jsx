import React, {useState} from 'react';
import Button from '../../Components/Button';
import Cart from '../../Components/Cart';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart';
import { generate } from 'shortid';

// React has state handling
// Hooks

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (unique_id, data) => dispatch(addToCart(unique_id, data))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)( function (props) {
  const [num, setNum] = useState(0);
  let data = {
    header: 'New Item',
    body: 'This item is new',
    price: "$400",
  };
  const newData = () => {
    let unique_id = generate();
    data.unique_id = unique_id
    return data;
  };
  return (
    <section>
      <h1>Home</h1>
      <div className="home-div">
        <button type="button" onClick={() => props.addToCart(newData().unique_id, newData())}>Add To Cart</button>
        <Cart />
      </div>  
    </section>
  );
});