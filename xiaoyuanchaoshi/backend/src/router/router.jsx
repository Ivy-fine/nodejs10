import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routerview from './routerView'
import routes from '@/router/routes'
class Router extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <Routerview routes={routes}/>
            </BrowserRouter>
         );
    }
}
 
export default Router;