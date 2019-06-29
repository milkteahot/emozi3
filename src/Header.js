import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';

class Header extends Component {
    render() {
        return(
            <h1 class="ui center aligned icon header">
            <img src={logo} className="logo"/>
            이모티콘 콘테스트
            <img src={logo} className="logo"/>
            </h1>

            
        );
    }
}

export default Header;