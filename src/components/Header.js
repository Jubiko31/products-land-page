import React, {Component} from 'react'
import logo from '../logo.png';
class Header extends Component {
  state = {
    query: ""
  };

  render() {
    const { search, totalAmount } = this.props;
    return (
      <div className='navbar'>
        <img className='logo' src={logo} alt='Logo' />
        <div className='FormData'>
            <input className='input-field' type='text' placeholder='Search product...' 
                   onInput={({ target }) => 
                    this.setState((state) => (state.query = target.value))  
                  }
            />
            <button className='search-btn' type='submit'
                    onClick={() => search(this.state.query)}
            >Search</button>
        </div>
        <div className='total-amount'>
            <p>Total price of products: $<span className='total-price'>{totalAmount}</span></p>
        </div>
      </div>
  )}
}

export default Header
