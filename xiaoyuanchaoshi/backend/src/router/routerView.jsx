import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
class Routerview extends Component {
    state = {  }
    render() { 
        const routes = this.props.routes
        const routesArr =routes && routes.filter(item=>!item.redirect)
        const redirectArr = routes && routes.filter(item=>item.redirect)
        return ( 
            <Switch>
                {
                    routesArr && routesArr.map((item,index)=>{
                        return <Route path={item.path} key={index} render={(props)=>{return <item.component {...props} childroutes={item.children}/>}}></Route>
                    })
                }
                {
                    redirectArr && redirectArr.map((item,index)=>{
                        return <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
                    })
                }
            </Switch>
         );
    }
}
 
export default Routerview;