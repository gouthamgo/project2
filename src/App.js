import React, {Component} from 'react'
import { Home } from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export class App extends Component {
  render(){
    return(
      <div>
      <BrowserRouter>
                    <Switch>

                        <Route exact path='/' component={Home} />
                        {/* Home componentgonna be rendered for the user interaction */} 

                    </Switch>
                </BrowserRouter>
      </div>
    )
  }
}

export default App;
