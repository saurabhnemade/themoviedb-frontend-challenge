import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Grid, Image, Label} from 'semantic-ui-react';
import isEmpty from 'lodash/isEmpty';

export default class CastDetails extends Component {
    static propTypes = {
        match: PropTypes.object,
        castId: PropTypes.string,
        details: PropTypes.object,

        _setCastId: PropTypes.func.isRequired,
        _loadCastDetails: PropTypes.func.isRequired,
        _reset: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props._reset();
        this.props._setCastId(this.props.match.params.castId);
        this.props._loadCastDetails(this.props.match.params.castId);
    }

    createRow = (label, value) => {
        if (isEmpty(value)) return null;

        return (
            <div className="movie-detail-row">
                <div className="movie-detail-row-col-fixed-width">
                    {label}
                </div>
                <div className="movie-detail-row-col">
                    {value}
                </div>
            </div>
        );
    }

    onGoToMovie = (movie) => {
        this.props.history.push(`/movie/${movie.id}`);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src={`http://image.tmdb.org/t/p/w342/${this.props.details.profile_path}`}/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            {this.createRow("Name", this.props.details.name)}
                            {this.createRow("Also known as", (
                                <Fragment>
                                    {this.props.details.also_known_as &&  this.props.details.also_known_as.length > 0 &&
                                        <Fragment>
                                            {this.props.details.also_known_as.join(", ")}
                                        </Fragment>
                                    }
                                </Fragment>
                            ))}
                            {this.createRow("Born on", this.props.details.birthday)}
                            {this.createRow("Born at", this.props.details.place_of_birth)}
                            {this.createRow("Known For", this.props.details.known_for_department)}
                            {this.createRow("Death on", this.props.details.deathday)}
                            {this.createRow("Gender", this.props.details.gender === 1 ? "Female" : "Male" )}
                            {this.createRow("Biography", this.props.details.biography)}
                            {this.createRow("Popularity", this.props.details.popularity)}
                            {this.createRow("Movies", (
                                <Fragment>
                                    {!isEmpty(this.props.details.movie_credits) && !isEmpty(this.props.details.movie_credits.cast) && this.props.details.movie_credits.cast.length > 0 &&
                                        <Fragment>
                                            <Label.Group>
                                                {this.props.details.movie_credits.cast.map((movie) => {
                                                    return (
                                                        <Label as='a' onClick={() => this.onGoToMovie(movie)} style={{padding: 5}}>
                                                            {movie.title}
                                                        </Label>
                                                    );
                                                })}
                                            </Label.Group>
                                        </Fragment>
                                    }
                                </Fragment>
                            ))}

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}