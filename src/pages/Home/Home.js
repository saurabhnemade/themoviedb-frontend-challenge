import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Card, Image, Popup, Rating, Segment } from 'semantic-ui-react';
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

    componentDidMount() {
        if (this.props.recentMovies.length === 0 ) {
            this.props._loadDefault();
        }
    }

    onMovieClick = (movie) => {
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
                        <div className="home-title">
                            Recent Movies
                        </div>
                        <Card.Group>
                            {this.props.recentMovies.map((movie, index) => {
                                const movieCard = (
                                    <Card link onClick={() => this.onMovieClick(movie)}>
                                        <Card.Content header={movie.title} />
                                        <Image src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
                                        <Card.Content extra>
                                            Rating: {movie.vote_average}
                                        </Card.Content>
                                    </Card>
                                );

                                return (
                                    <Popup key={index}
                                           trigger={movieCard}
                                           position='bottom left'>
                                        <Popup.Header>Movie Information</Popup.Header>
                                        <Popup.Content>
                                            <Rating icon='star' defaultRating={movie.vote_average} maxRating={10} />
                                            <div>
                                                {movie.overview}
                                            </div>
                                        </Popup.Content>
                                    </Popup>
                                );
                            }, this)}
                        </Card.Group>
                    </div>
                }
            </div>
        );
    }
}