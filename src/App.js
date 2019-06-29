import React, { Component } from 'react';

import './App.css';
import Card from './Card';
import Menu from './Menu';
import Header from './Header';
import WinnerList from './WinnerList';
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Menu />
          <Header />
          <WinnerList/>
        </header>
          <Card />
      </div>
    );

  }
}

export default App;
