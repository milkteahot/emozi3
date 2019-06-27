import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        return(
            <div class="body2">
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                    <a class="active item">
                    메인
                    </a>
                    <a class="item">
                    투표하기
                    </a>
                    <a class="item">
                    지원하기
                    </a>
                </div>
            </div>
            </div>

        );
    }
}

export default Menu;