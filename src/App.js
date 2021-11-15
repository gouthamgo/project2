import React, {Component} from 'react'
import { Home } from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {AddProducts} from './components/AddProducts'
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import {Women} from './components/Women'
import {Products} from './components/Products'

import { ProductsContextProvider } from './global/ProductsContext'

export class App extends Component {
  render(){
    return(
      <ProductsContextProvider>
        <div>
          <BrowserRouter>
            <Switch>

              <Route exact path='/' component={Home} />
              {/* Home componentgonna be rendered for the user interaction */}

              <Route exact path='/addproducts' component={AddProducts} />

              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />

              <Route path='/Women' component={Women} />
              <Route path='/Products' component={Products} />




            </Switch>
          </BrowserRouter>
        </div>

      </ProductsContextProvider>
    )
  }
}

export default App;
