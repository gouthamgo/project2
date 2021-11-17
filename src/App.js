import React, { Component } from 'react';
import { Home } from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Women } from './components/Women';
import { auth, db } from './config/Config';
import {Products} from './components/Products'
import { Cart } from './components/Cart'

import {ProductShow} from './components/ProductShow'
import { CartContextProvider } from './global/CartContext'

import { Cashout } from './components/Cashout'






import { ProductsContextProvider } from './global/ProductsContext'
import SingleProduct from './components/SingleProduct';

export class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user) {
        db.collection('Users').doc(user.uid).get().then(snapshot => {
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else {
        this.setState({
          user: null
        })
      }
    })
  }

render(){
  return(
      // we can use it in any of the components defined under

<ProductsContextProvider>
      <CartContextProvider>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={() => <Home user={this.state.user} />} />
              <Route exact path='/addproducts' component={AddProducts} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/Women' component={Women} />
              <Route exact path='/Products' component={() => <Products user={this.state.user} />} />

              <Route path='/ProductShow' component={ProductShow} />
               <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />

                <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />

      </Switch>
  </BrowserRouter>
        </div>
          </CartContextProvider>
      </ProductsContextProvider>

  )
  }
}

export default App;
