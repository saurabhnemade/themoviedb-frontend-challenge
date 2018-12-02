import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Image, Loader, Rating, Popup, Card, Pagination, Icon} from "semantic-ui-react";
import "./popular.css";
import isEmpty from 'lodash/isEmpty';

export default class Popular extends Component {
    static propTypes = {
        history: PropTypes.object,

        popularMovies: PropTypes.array,
        isLoading: PropTypes.bool,
        isError: PropTypes.bool,
        page: PropTypes.number,
        total_pages: PropTypes.number,

        /** App Actions*/
        _loadPopularMovies: PropTypes.func.isRequired,
        _setPage: PropTypes.func.isRequired
    };

    componentDidMount() {
        if (this.props.popularMovies.length === 0 ) {
            this.props._loadPopularMovies(1);
        }
    }

    onMovieClick = (movie) => {
        this.props.history.push(`/movie/${movie.id}`);
    }

    onPageChange = (event, data) => {
        this.props._setPage(data.activePage);
        this.props._loadPopularMovies(data.activePage);
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
                        <div className="pagination-container">
                            <Pagination
                                defaultActivePage={this.props.page}
                                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                                totalPages={this.props.total_pages}
                                onPageChange={this.onPageChange}
                            />
                        </div>
                        {!isEmpty(this.props.popularMovies) &&
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
                        }
                    </div>
                }
            </div>
        );
    }
}