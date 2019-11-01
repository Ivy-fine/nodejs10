import React, { Component } from 'react';
import RouterView from "@/router/routerView";
import {NavLink} from 'react-router-dom'
class Layout extends Component {
    state = { 
        navList:[
            {
                path:'/home/main',
                text:'首页',
                name:'main',
                icon:'fa fa-home'
            },{
                path:'/home/classify',
                text:'分类',
                name:'classify',
                icon:'fa fa-th-large'
            },{
                path:'/home/shopcart',
                text:'购物车',
                name:'shopcart',
                icon:'fa fa-shopping-cart'
            },{
                path:'/home/mine',
                text:'我的',
                name:'mine',
                icon:'fa fa-user'
            }
        ]
     }
    render() { 
        return ( 
            <div className="wraper">
                <header className="header">
                    <h3>校园超市</h3>
                    <div className="search">
                        <input type="text" placeholder="搜索校园超市商品"/><i className="fa fa-search"></i>
                    </div>
                </header>
                <section className="section">
                    <RouterView routes={this.props.childRoutes}/>
                </section>
                <footer className="footer">
                    {
                        this.state.navList.map(nav=>{
                            return <NavLink to={nav.path} key={nav.name}>
                                <i className={nav.icon}></i>
                                <span>{nav.text}</span>
                            </NavLink>
                        })
                    }
                </footer>
            </div>
         );
    }
}
 
export default Layout;