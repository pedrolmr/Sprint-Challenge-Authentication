import React, { Component } from 'react';
import './App.css';

import { Switch, NavLink, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </nav>

        <section>
          <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/register' component={Login} />
          </Switch>
        </section>

      </div>
    );
  }
}

export default App;
