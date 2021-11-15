import React, { Component } from 'react';
import { Home } from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Women } from './components/Women';
import { auth, db } from './config/Config';
import {Products} from './components/Products'
<<<<<<< HEAD
=======
import {ProductShow} from './components/ProductShow'




>>>>>>> becc894388c02b1b5a965ebe63c94d52733979c2
import { ProductsContextProvider } from './global/ProductsContext'


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
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={() => <Home user={this.state.user} />} />
              <Route exact path='/addproducts' component={AddProducts} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/Women' component={Women} />
              <Route path='/Products' component={Products} />
<<<<<<< HEAD
            </Switch>
          </BrowserRouter>
        </div>
      </ProductsContextProvider>
=======

              <Route path='/ProductShow' component={ProductShow} />
              



                </Switch>
                </BrowserRouter>
                </div>
                </ProductsContextProvider>
>>>>>>> becc894388c02b1b5a965ebe63c94d52733979c2
    )
  }
}

export default App;
