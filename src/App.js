import React, { Component } from 'react';
import { Home } from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Women } from './components/Women';
import { auth, db } from './config/Config';
import {Products} from './components/Products'




import { ProductsContextProvider } from './global/ProductsContext'


export class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
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
        <div>
          <BrowserRouter>
            <Switch>


              <Route exact path='/' component={Home} />




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
