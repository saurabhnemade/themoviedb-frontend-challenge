import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Menu, Input, Grid} from 'semantic-ui-react';
import './App.css';

/** Import pages here **/
import HomeContainer from './pages/Home/HomeContainer';
import TrendingContainer from './pages/Trending/TrendingContainer';
import PopularContainer from './pages/Popular/PopularContainer';
import NotFound from './pages/404/NotFound';

//Semantic UI CSS Setup
import 'semantic-ui-css/semantic.min.css';
import SearchContainer from "./pages/Search/SearchContainer";

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
                      <Menu.Item name='Popular' as={Link} to='/popular'>
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
                      <Route path='/trending' component={TrendingContainer}/>
                      <Route path='/popular' component={PopularContainer}/>
                      <Route path='/search/:term' component={SearchContainer}/>
                      <Route component={NotFound} />
                  </Switch>
              </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default App;
