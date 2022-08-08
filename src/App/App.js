import React from 'react';
import axios from 'axios';
import Header from '../Header';
import ItemList from '../ItemList';
import './App.scss';

class App extends React.Component {
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
      // eslint-disable-next-line no-lone-blocks
      { this.localCart[id] === 0 ? delete this.localCart[id] : this.localCart[id] -= 1 }
    }
    // update cart
    localStorage.setItem('products', JSON.stringify(this.localCart));
    this.setState((state) => state.cart = this.localCart);
  };

  // ADDING SUM IN BASKET
  calcTotalAmount = () => {
    const total = this.state.products.reduce((previous, current) => {
        if(this.localCart[current.id]) {
          return previous + current.price * this.localCart[current.id]
        }
        return previous;
    }, 0);
    return total;
  };

  render() {
    const totalAmount = this.calcTotalAmount();

    const { products, isSelected } = this.state;
    return (
      <>
        <Header search={this.search} totalAmount={totalAmount} />
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
