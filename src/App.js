import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Menu, Input, Grid} from 'semantic-ui-react';
import './App.css';
import history from './history';

/** Import pages here **/
import HomeContainer from './pages/Home/HomeContainer';
import TrendingContainer from './pages/Trending/TrendingContainer';
import PopularContainer from './pages/Popular/PopularContainer';
import MovieDetailsContainer from "./pages/MovieDetails/MovieDetailsContainer";
import SearchContainer from "./pages/Search/SearchContainer";
import CastDetailsContainer from "./pages/CastDetails/CastDetailsContainer";
import NotFound from './pages/404/NotFound';

//Semantic UI CSS Setup
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          searchTerm: ""
      };

      /**
       * I hate doing bind in between render and they will create multiple instances of same function
       * in case of .map so I prefer this one. There is another way, but I found it bit confusing for readers/bug fixers so this one
       * @type {any}
       */
      this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
      this.onKeyPressSearchTerm = this.onKeyPressSearchTerm.bind(this);
      this.onSearchAction = this.onSearchAction.bind(this);
  }

  onChangeSearchTerm(event) {
      this.setState({searchTerm: event.target.value});
  }

  onKeyPressSearchTerm(event) {
      if (event.key === 'Enter') {
          this.onSearchAction();
      }
  }

  onSearchAction() {
      history.push(`/search/${this.state.searchTerm}`);
  }

  onGoToAuthor() {
      window.open("https://github.com/saurabhnemade");
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
              <div>The MovieDB Frontend challenge</div>
              <div className="author" onClick={this.onGoToAuthor}>Created by @SaurabhNemade</div>
          </div>
          <Grid className="">
              <Grid.Column width={3}>
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
                          <Input icon='search'
                                 placeholder='Search Movie by title...'
                                 onChange={this.onChangeSearchTerm}
                                 onKeyPress={this.onKeyPressSearchTerm}
                                 value={this.state.searchTerm} />
                      </Menu.Item>
                  </Menu>
              </Grid.Column>

              <Grid.Column width={12}>
                  <Switch>
                      <Route exact path='/' component={HomeContainer}/>
                      <Route exact path='/home' component={HomeContainer}/>
                      <Route path='/trending' component={TrendingContainer}/>
                      <Route path='/popular' component={PopularContainer}/>
                      <Route path='/search/:term' component={SearchContainer}/>
                      <Route path='/movie/:movieId' component={MovieDetailsContainer} />
                      <Route path='/people/:castId' component={CastDetailsContainer}/>
                      <Route component={NotFound} />
                  </Switch>
              </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default App;
