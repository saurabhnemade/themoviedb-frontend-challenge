import constants from './../../../constants';
import ActionTypes from './../../../actions/index';
import { buildUrl} from "../../../Utils/Url";

const Actions = {
    _setMovieId: (movieId) => (dispatch) => {
        dispatch({ type: ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_SET_ID, movieId});
    },

    _loadMovieDetails: (movieId) => async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_LOAD });
            const params = {};

            const url = buildUrl(constants.API_KEY, constants.API_BASE_URL, `movie/${movieId}`, params);
            const response = await fetch(url);
            const json = await response.json();
            dispatch({
                type: ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_LOAD_SUCCESS,
                details: json
            });
        } catch(error) {
            dispatch({ type: ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_LOAD_FAILURE });
        }
    },
    _loadMovieCast: (movieId) => async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.MOVIE_DETAIL.MOVIE_CAST_LOAD });
            const params = {};

            const url = buildUrl(constants.API_KEY, constants.API_BASE_URL, `movie/${movieId}/casts`, params);
            const response = await fetch(url);
            const json = await response.json();
            dispatch({
                type: ActionTypes.MOVIE_DETAIL.MOVIE_CAST_LOAD_SUCCESS,
                casts: json.cast
            });
        } catch(error) {
            dispatch({ type: ActionTypes.MOVIE_DETAIL.MOVIE_CAST_LOAD_FAILURE });
        }
    },
    _reset: () => (dispatch) => {
        dispatch({ type: ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_RESET });
    }
};

export default Actions;