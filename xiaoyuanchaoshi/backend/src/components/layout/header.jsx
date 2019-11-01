import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        let {title} = this.props
        return ( 
            <header className="header">{title}</header>
         );
    }
}
 
export default Header;