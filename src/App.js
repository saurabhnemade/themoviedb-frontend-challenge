import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Menu, Input, Grid} from 'semantic-ui-react';
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
          <Grid>
              <Grid.Column width={8}>
                  <Menu vertical>
                      <Menu.Item name='Home' as={Link} to='/home'>
                          Home
                      </Menu.Item>
                      <Menu.Item name='Trending' as={Link} to='/trending'>
                          Trending
                      </Menu.Item>
                      <Menu.Item name='inbox' as={Link} to='/home'>
                          Popular
                      </Menu.Item>
                      <Menu.Item>
                          <Input icon='search' placeholder='Search Movie by title...' />
                      </Menu.Item>
                  </Menu>
              </Grid.Column>

              <Grid.Column width={8}>
                  <Switch>
                      <Route exact path='/' component={HomeContainer}/>
                      <Route exact path='/home' component={HomeContainer}/>
                      <Route path='/roster' component={HomeContainer}/>
                      <Route path='/schedule' component={HomeContainer}/>
                      <Route component={NotFound} />
                  </Switch>
              </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default App;
