import React, { Component } from "react";
import Proptypes from "prop-types";

export class OrderItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      color: this.props.order.completed ? "Green" : "none"
    };
  };

  render() {
    const { id, title, price, totalPrice } = this.props.order;
    return (
      <div>
        <div style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            onClick={this.props.showPrice.bind(this, price, totalPrice)}
          />{" "}
          {title}
          <button onClick={this.props.delOrder.bind(this, id)} style={btnStyle}>
            Remove
          </button>
          <p />
        </div>
      </div>
    );
  }
}

//Proptypes
OrderItem.propTypes = {
  order: Proptypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer"
  // float: "right"
};

export default OrderItem;
