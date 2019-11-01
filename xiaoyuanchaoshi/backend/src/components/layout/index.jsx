import React, { Component } from 'react';
import Header from './header'
import Section from './section'
class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wraper">
                <Header title="校园超市管理系统"/>
                <Section>
                    {this.props.children}
                </Section>
            </div>
         );
    }
}
 
export default Layout;