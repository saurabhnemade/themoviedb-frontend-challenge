import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'semantic-ui-react';
import { Dimmer, Loader, Card } from 'semantic-ui-react';
import './home.css';


export default class Home extends Component {
    static propTypes = {
      history: PropTypes.object,

      recentMovies: PropTypes.array,
      isLoading: PropTypes.bool,
      isError: PropTypes.bool,

      /* Action creators */
      _loadDefault: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.recentMovies.length === 0 ) {
            this.props._loadDefault();
        }
    }

    onMovieClick = (movie) => {
        console.log('movie clicked', movie);
        this.props.history.push(`/movie/${movie.id}`);
    }

    render() {
        return (
            <div className="home">
                {this.props.isLoading && this.props.isError === false &&
                    <Dimmer active>
                        <Loader content='Loading' />
                    </Dimmer>
                }
                {this.props.isLoading === false && this.props.isError &&
                    <div>Something went wrong :(</div>
                }
                {this.props.isLoading === false && this.props.isError === false &&
                    <div>
                        <div>
                            Recent Movies
                        </div>
                        <Card.Group>
                            {this.props.recentMovies.map((movie, index) => {
                                return (
                                    <Card key={index} link onClick={() => this.onMovieClick(movie)}>
                                        <Card.Content header={movie.title} />
                                        <Card.Content description={movie.overview} />
                                        <Card.Content extra>
                                            Rating: {movie.vote_average}
                                        </Card.Content>
                                    </Card>
                                );
                            }, this)}
                        </Card.Group>
                    </div>
                }
            </div>
        );
    }
}