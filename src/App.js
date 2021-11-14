import React, {Component} from 'react'
import { Home } from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup } from './components/Signup';
import { Login } from './components/Login';


export class App extends Component {
  render(){
    return(
      <div>
      <BrowserRouter>
                    <Switch>

                        <Route exact path='/' component={Home} />
                        {/* Home componentgonna be rendered for the user interaction */}
                        <Route path='/signup' component={Signup} />
                        <Route path='/login' component={Login} />

                    </Switch>
                </BrowserRouter>
      </div>
    )
  }
}

export default App;
