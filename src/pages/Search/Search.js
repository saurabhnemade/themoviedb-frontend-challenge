import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Image, Loader, Rating, Card, Popup} from "semantic-ui-react";

export default class Search extends Component {
    static propTypes = {
      match: PropTypes.object,

      searchTerm: PropTypes.string,
      isLoading: PropTypes.bool,
      isError: PropTypes.bool,

      /** action creators **/
        _setSearchTerm: PropTypes.func.isRequired,
        _loadSearchResults: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props._setSearchTerm(this.props.match.params.term);
        this.props._loadSearchResults(this.props.match.params.term, 1);
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
                        Search Results for : {this.props.match.params.term}
                    </div>
                    <Card.Group>
                        {this.props.results.map((movie, index) => {
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