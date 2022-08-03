import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import ItemList from './components/ItemList';
import './App.scss';

class App extends React.Component {
  state = {
    products: [],
    isSelected: null,
    totalAmount: 0
  };

  componentDidMount = async () => {
    const { data } = await axios.get('./data.json');
    this.setState((state) => {
      state.products = data;
      return state;
    })
  }

  search = (item) => {
    const isSelected = this.state.products.filter((product) => {
      const itemName = product.name.toLowerCase();
      const searchedName = item.toLowerCase();
      return itemName.includes(searchedName)
    });
    this.setState((state) => (state.isSelected = isSelected))
  }

  render () {
    const { products, isSelected } = this.state;
    return (
      <>
        <Header search={this.search} totalAmount={this.state.totalAmount}/>
        <ItemList 
            products={isSelected || products}
        />
      </>
    )
  }
}

export default App;
