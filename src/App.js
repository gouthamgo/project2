import React, { Component } from 'react';
import { Home } from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Women } from './components/Women';
import { auth, db } from './config/Config';



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
      <div>
        <BrowserRouter>
          <Switch>

              <Route exact path='/' component={() => <Home user={this.state.user}/> 
            {/* Home componentgonna be rendered for the user interaction */}

            <Route exact path='/addproducts' component={AddProducts} />

            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />

            <Route path='/Women' component={Women} />




                    </Switch>
                </BrowserRouter>
      </div>
    )
  }
}

export default App;
