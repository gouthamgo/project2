import React, { Component } from 'react';
import { Home } from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Women } from './components/Women';
import { auth, db } from './config/Config';
import {Products} from './components/Products'
import {ProductShow} from './components/ProductShow'
import { CartContextProvider } from './global/CartContext'






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

              <Route path='/ProductShow/:id' component={ProductShow} />
            </Switch>
          </BrowserRouter>
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
    )
  }
}

export default App;
