import React, { Component } from "react";
import Header from "./components/Layout/Header";
import Orders from "./components/Orders";
import AddOrder from "./components/AddOrder";
import "./App.css";
import uuid from "uuid";

class App extends Component {
  state = {
    orders: [
      {
        id: uuid.v4(),
        title: "Small Pasta",
        price: 5,
        completed: false,
        totalPrice: 0
      },
      {
        id: uuid.v4(),
        title: "Medium Pasta",
        price: 7.5,
        completed: false,
        totalPrice: 0
      },
      {
        id: uuid.v4(),
        title: "Large Pasta",
        price: 10,
        completed: false,
        totalPrice: 0
      },

      {
        id: uuid.v4(),
        title: "Tomato Sauce",
        price: 1,
        completed: false,
        totalPrice: 0
      },
      {
        id: uuid.v4(),
        title: "Mushroom Sauce",
        price: 1.5,
        completed: false,
        totalPrice: 0
      },
      {
        id: uuid.v4(),
        title: "Pesto Sauce",
        price: 1.5,
        completed: false,
        totalPrice: 0
      },

      {
        id: uuid.v4(),
        title: "Fish",
        price: 1.5,
        completed: false,
        totalPrice: 0
      },
      {
        id: uuid.v4(),
        title: "Meat",
        price: 1.5,
        completed: false,
        totalPrice: 0
      },
      {
        id: uuid.v4(),
        title: "Vegetables",
        price: 1,
        completed: false,
        totalPrice: 0
      }
    ]
  };

  handleClick() {
    console.log("Your total orders is ");
  }

  //Toggle checkbox
  markComplete = id => {
    this.setState({
      orders: this.state.orders.map(order => {
        if (order.id === id) {
          order.completed = !order.completed;
        }
        return order;
      })
    });
  };

  //Delete Order
  delOrder = id => {
    this.setState({
      orders: [...this.state.orders.filter(order => order.id !== id)]
    });
  };

  //Add order
  addOrder = title => {
    const newOrder = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ orders: [...this.state.orders, newOrder] });
  };

  // Show Price
  showPrice = price => {
    console.log(price);
  };

  showTotalPrice = totalPrice => {
    console.log(totalPrice);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddOrder addOrder={this.addOrder} />
          <Orders
            orders={this.state.orders}
            markComplete={this.markComplete}
            showPrice={this.showPrice}
            delOrder={this.delOrder}
            showTotalPrice={this.showTotalPrice}
          />
        </div>
        <button className="orderBtn " onClick={this.handleClick}>
          Place Order!
        </button>
      </div>
    );
  }
}

export default App;
