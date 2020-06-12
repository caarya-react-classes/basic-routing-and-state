import React, {useState, useEffect} from 'react';
import Button from '../../Components/Button';
import Cart from '../../Components/Cart';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart';
import { generate } from 'shortid';
import { getUsers } from '../../redux/user';

// React has state handling
// Hooks

const mapStateToProps = (state) => {
  return {
    users: state.user.data,
    error: state.user.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (unique_id, data) => dispatch(addToCart(unique_id, data)),
    getUsers: () => dispatch(getUsers()),
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
  useEffect(() => {
    // As soon as this component first renders, this useEffect is called by react automatically
    // This behaves like componentDidMount lifecycle method
    // if you give no dependency array for the effect, basically the array after the callback
    props.getUsers();
  }, []);
  // the array inside the useffect is called dependency array
  return (
    <section>
      <h1>Home</h1>
      <div className="home-div">
        <div>
          {
            props.users.map((item,index) => {
              return (
                <div key={"random_string"+index}>
                    <img alt="no-data" src={item.picture.thumbnail} />
                    <p>{item.name.title} {item.name.first} {item.name.last}</p>
                </div>
              )
            })
          }
          {
            props.error != null ? <p>{props.error}</p> : <p>No Error</p>
          }
        </div>
        <button type="button" onClick={() => props.addToCart(newData().unique_id, newData())}>Add To Cart</button>
        <Cart />
      </div>  
    </section>
  );
});