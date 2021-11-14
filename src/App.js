import React, {Component} from 'react'
import { Home } from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
import { AddProducts } from './components/AddProducts'
=======
import { Signup } from './components/Signup';
import { Login } from './components/Login';
>>>>>>> a5190603a1238e9c0802e581a3cdcf17ea216f9a


export class App extends Component {
  render(){
    return(
      <div>
      <BrowserRouter>
                    <Switch>

                        <Route exact path='/' component={Home} />
                        {/* Home componentgonna be rendered for the user interaction */}
<<<<<<< HEAD
                        <Route exact path='/addproducts' component={AddProducts} />
=======
                        <Route path='/signup' component={Signup} />
                        <Route path='/login' component={Login} />
>>>>>>> a5190603a1238e9c0802e581a3cdcf17ea216f9a

                    </Switch>
                </BrowserRouter>
      </div>
    )
  }
}

export default App;
