/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable guard-for-in */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import React from 'react';
import axios from 'axios';
import Header from '../Header';
import ItemList from '../ItemList';
import './App.scss';

class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
    isSelected: null,
    totalAmount: 0,
    cart: {},
  };

  localCart = JSON.parse(localStorage.getItem('products')) || {};

  async componentDidMount() {
    const { data } = await axios.get('./data.json');
    this.setState((state) => {
      state.products = data;
      state.cart = this.localCart;
      return state;
    });
  }

  search = (item) => {
    const isSelected = this.state.products.filter((product) => {
      const itemName = product.name.toLowerCase();
      const searchedName = item.toLowerCase();
      return itemName.includes(searchedName);
    });
    this.setState((state) => (state.isSelected = isSelected));
  };

  addNewProduct = (id) => {
    // eslint-disable-next-line no-lone-blocks
    { this.localCart[id]
      ? delete this.localCart[id]
      : this.localCart[id] = 1;
    }

    localStorage.setItem('products', JSON.stringify(this.localCart));
    this.setState((state) => (state.cart = this.localCart));
  };

  // UPDATE AMOUNT LOGIC
  updateAmount = (id, direction) => {
    if (direction === 'increase') {
      this.localCart[id] += 1;
    }
    if (direction === 'decrease') {
      if (this.localCart[id] === 0) { delete this.localCart[id]; } else this.localCart[id] -= 1;
    }
    // update cart
    localStorage.setItem('products', JSON.stringify(this.localCart));
    this.setState((state) => state.cart = this.localCart);
  };

  // ADDING SUM IN BASKET
  calcTotalAmount = () => {
    let total = 0;
    for (const id in this.localCart) {
      // eslint-disable-next-line no-loop-func
      this.state.products.forEach((element) => {
        // eslint-disable-next-line eqeqeq
        if (element.id == id) {
          total += this.localCart[id] * element.price;
        }
      });
    }
    return total;
  };

  render() {
    this.state.totalAmount = this.calcTotalAmount();
    const { products, isSelected } = this.state;
    return (
      <>
        <Header search={this.search} totalAmount={this.state.totalAmount} />
        <ItemList
          products={isSelected || products}
          updateAmount={this.updateAmount}
          cart={this.state.cart}
          addNewProduct={this.addNewProduct}
        />
      </>
    );
  }
}

export default App;