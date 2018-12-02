import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/movie-details-actions";
import MovieDetails from './MovieDetails';

const mapStateToProps = (state) => {
    return {
        movieId: state.MovieDetails.movieId,
        details: state.MovieDetails.details,
        casts: state.MovieDetails.casts,
        isLoading: state.MovieDetails.isLoading,
        isError: state.MovieDetails.isError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _setMovieId : bindActionCreators(Actions._setMovieId, dispatch),
        _loadMovieDetails : bindActionCreators(Actions._loadMovieDetails, dispatch),
        _loadMovieCast: bindActionCreators(Actions._loadMovieCast, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
