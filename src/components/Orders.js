import React, { Component } from "react";
import OrderItem from "./OrderItem";
import Proptypes from "prop-types";

export class Orders extends Component {
  render() {
    return this.props.orders.map(order => (
      <OrderItem
        key={order.id}
        order={order}
        markComplete={this.props.markComplete}
        showPrice={this.props.showPrice}
        delOrder={this.props.delOrder}
      />
    ));
  }
}

//Proptypes
Orders.propTypes = {
  orders: Proptypes.array.isRequired
};
export default Orders;
