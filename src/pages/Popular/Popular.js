import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Image, Loader, Rating, Popup, Card} from "semantic-ui-react";
import "./popular.css";

export default class Popular extends Component {
    static propTypes = {
        history: PropTypes.object,

        popularMovies: PropTypes.array,
        isLoading: PropTypes.bool,
        isError: PropTypes.bool,

        /** App Actions*/
        _loadPopularMovies: PropTypes.func.isRequired
    };

    componentDidMount() {
        if (this.props.popularMovies.length === 0 ) {
            this.props._loadPopularMovies(1);
        }
    }

    onMovieClick = (movie) => {
        this.props.history.push(`/movie/${movie.id}`);
    }

    render() {
        return (
            <div className="popular">
                {this.props.isLoading && this.props.isError === false &&
                    <Dimmer active inverted>
                        <Loader content='Loading' />
                    </Dimmer>
                }
                {this.props.isLoading === false && this.props.isError &&
                    <div>Something went wrong :(</div>
                }
                {this.props.isLoading === false && this.props.isError === false &&
                    <div>
                        <div className="popular-title">
                            Popular Movies
                        </div>
                        <Card.Group>
                            {this.props.popularMovies.map((movie, index) => {
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