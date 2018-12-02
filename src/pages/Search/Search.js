import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Image, Loader, Rating, Card, Popup, Pagination, Icon} from "semantic-ui-react";
import isEmpty from 'lodash/isEmpty';

export default class Search extends Component {
    static propTypes = {
      match: PropTypes.object,

      searchTerm: PropTypes.string,
      isLoading: PropTypes.bool,
      isError: PropTypes.bool,
      page: PropTypes.number,
      total_pages: PropTypes.number,

      /** action creators **/
        _setSearchTerm: PropTypes.func.isRequired,
        _loadSearchResults: PropTypes.func.isRequired,
        _setPage: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props._setSearchTerm(this.props.match.params.term);
        this.props._loadSearchResults(this.props.match.params.term, 1);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.searchTerm !== this.props.match.params.term) {
    //         this.props._setSearchTerm(this.props.match.params.term);
    //         this.props._loadSearchResults(this.props.match.params.term, 1);
    //     }
    // }

    onMovieClick = (movie) => {
        this.props.history.push(`/movie/${movie.id}`);
    }

    onPageChange = (event, data) => {
        this.props._setPage(data.activePage);
        this.props._loadSearchResults(this.props.match.params.term, data.activePage);
    }

    render() {
        return (
            <div className="home">
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
                        <div className="home-title">
                            Search Results for : {this.props.match.params.term}
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
                        {!isEmpty(this.props.results) &&
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
                        }
                    </div>
                }
            </div>
        );
    }
}