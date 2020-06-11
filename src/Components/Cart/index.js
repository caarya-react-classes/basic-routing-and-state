import React from "react";
import { connect } from "react-redux";
import { deleteFromCart } from '../../redux/cart';
import './style.css';

function Cart(props) {
  console.log(props.cart);
  return (
    <div className="cart">
      {/* DISPLAY ITEMS IN THE CART, DELETE FROM CART */}
      <div className="items">
        {Object.values(props.cart).map((items) => {
          return (
            <div className="class-item">
              <h4>{items.header}</h4>
              <p>{items.body}</p>
              <p>{items.price}</p>
              <button onClick={() => props.deleteItem(items.unique_id)}>Delete Item</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// READ STATE
const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
  };
};

// ACTIONS
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
