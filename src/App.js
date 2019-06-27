import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Menu from './Menu';
import Header from './Header';
import WinnerList from './WinnerList';

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
