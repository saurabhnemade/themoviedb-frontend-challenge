import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Image, Label} from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import './movie-detail.css';

export default class MovieDetails extends Component {
    static propTypes = {
        match: PropTypes.object,
        details: PropTypes.object,
        casts: PropTypes.array,
        movieId: PropTypes.string,
        isLoading: PropTypes.bool,
        isError: PropTypes.bool,

        _loadMovieDetails: PropTypes.func.isRequired,
        _loadMovieCast: PropTypes.func.isRequired,
        _setMovieId: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props._setMovieId(this.props.match.params.movieId);
        this.props._loadMovieDetails(this.props.match.params.movieId);
        this.props._loadMovieCast(this.props.match.params.movieId);
    }

    render() {

        const mock = {
            "adult": false,
            "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
            "belongs_to_collection": null,
            "budget": 116000000,
            "homepage": "http://www.venom.movie/site/",
            "id": 335983,
            "imdb_id": "tt1270797",
            "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
            "production_companies": [
                {
                    "id": 5,
                    "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
                    "name": "Columbia Pictures",
                    "origin_country": "US"
                },
                {
                    "id": 7505,
                    "logo_path": "/837VMM4wOkODc1idNxGT0KQJlej.png",
                    "name": "Marvel Entertainment",
                    "origin_country": "US"
                },
                {
                    "id": 34,
                    "logo_path": "/GagSvqWlyPdkFHMfQ3pNq6ix9P.png",
                    "name": "Sony Pictures",
                    "origin_country": "US"
                },
                {
                    "id": 31828,
                    "logo_path": null,
                    "name": "Avi Arad Productions",
                    "origin_country": "US"
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "US",
                    "name": "United States of America"
                }
            ],
            "runtime": 112,
            "status": "Released",
            "tagline": "The world has enough Superheroes.",
        };

        //cast_id: 13
        // character: "Anne Weying"
        // credit_id: "59cbebd2c3a368773d017419"
        // gender: 1
        // id: 1812
        // name: "Michelle Williams"
        // order: 1
        // profile_path: "/r4HQM2gO9Q7Ti7sJcRE4hcP8ddN.jpg"
        return (
            <div>
                Movie Details : {this.props.details.original_title}
                {!isEmpty(this.props.details) &&
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src={`http://image.tmdb.org/t/p/w342/${this.props.details.poster_path}`}/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <div className="movie-detail-row">
                                    <div className="movie-detail-row-col">
                                        "{this.props.details.tagline}"
                                    </div>
                                </div>
                                <div className="movie-detail-row">
                                    <div className="movie-detail-row-col-fixed-width">
                                        Languages
                                    </div>
                                    <div className="movie-detail-row-col">
                                        {this.props.details.spoken_languages.map((language, index) => {
                                            return (
                                                <Label key={index}>
                                                    {language.name}
                                                </Label>
                                            );

                                        })}
                                    </div>
                                </div>
                                <div className="movie-detail-row">
                                    <div className="movie-detail-row-col-fixed-width">
                                        Release date
                                    </div>
                                    <div className="movie-detail-row-col">
                                        {this.props.details.release_date}
                                    </div>
                                </div>
                                <div className="movie-detail-row">
                                    <div className="movie-detail-row-col-fixed-width">
                                        Revenue
                                    </div>
                                    <div className="movie-detail-row-col">
                                        {this.props.details.revenue} USD
                                    </div>
                                </div>
                                <div className="movie-detail-row">
                                    <div className="movie-detail-row-col-fixed-width">
                                        Length
                                    </div>
                                    <div className="movie-detail-row-col">
                                        {this.props.details.runtime} Minutes
                                    </div>
                                </div>
                                <div className="movie-detail-row">
                                    <div className="movie-detail-row-col-fixed-width">
                                        Rating
                                    </div>
                                    <div className="movie-detail-row-col">
                                        {this.props.details.vote_average} (Voted by {this.props.details.vote_count})
                                    </div>
                                </div>
                                <div className="movie-detail-row">
                                    <div className="movie-detail-row-col-fixed-width">
                                        Overview
                                    </div>
                                    <div className="movie-detail-row-col">
                                        {this.props.details.overview}
                                    </div>
                                </div>
                                {this.props.details.homepage &&
                                    <div className="movie-detail-row">
                                        <div className="movie-detail-row-col-fixed-width">
                                            Website:
                                        </div>
                                        <div className="movie-detail-row-col">
                                            {this.props.details.homepage}
                                        </div>
                                    </div>
                                }
                                {this.props.details.genres &&
                                    <div className="movie-detail-row">
                                        <div className="movie-detail-row-col-fixed-width">
                                            Geners
                                        </div>
                                        <div className="movie-detail-row-col">
                                            <Label.Group>
                                                {this.props.details.genres.map((genre, index) => {
                                                    return (
                                                        <Label key={index} style={{margin: 5}}>
                                                            {genre.name}
                                                        </Label>
                                                    );
                                                })}
                                            </Label.Group>
                                        </div>
                                    </div>
                                }
                                {this.props.casts.length > 0 &&
                                    <div className="movie-detail-row">
                                        <div className="movie-detail-row-col-fixed-width">
                                            Casts
                                        </div>
                                        <div className="movie-detail-row-col">
                                            <Label.Group size='huge'>
                                            {this.props.casts.map((cast, index) => {
                                                return (
                                                    <div className="movie-detail-profile" key={index}>
                                                        <Label as='a' image>
                                                            <Image src={`http://image.tmdb.org/t/p/w92/${cast.profile_path}`} onError={i => i.target.style.display='none'} />
                                                            {cast.name}
                                                            <Label.Detail>{cast.character}</Label.Detail>
                                                        </Label>
                                                    </div>
                                                );
                                            })}
                                            </Label.Group>
                                        </div>
                                    </div>
                                }
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                }
            </div>
        );
    }
}