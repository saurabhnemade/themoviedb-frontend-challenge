import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

/** Import pages here **/
import HomeContainer from './pages/Home/HomeContainer';
import NotFound from './pages/404/NotFound';

//Semantic UI CSS Setup
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path='/' component={HomeContainer}/>
              <Route path='/roster' component={HomeContainer}/>
              <Route path='/schedule' component={HomeContainer}/>
              <Route component={NotFound} />
          </Switch>
      </div>
    );
  }
}

export default App;
