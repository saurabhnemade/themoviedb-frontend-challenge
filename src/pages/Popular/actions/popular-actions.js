import {buildUrl} from "../../../Utils/Url";
import constants from "../../../constants";
import ActionTypes from './../../../actions/index';

const Actions = {
    _loadPopularMovies: (page) => async (dispatch) => {
        try {
            const params = {
                page: page
            };
            dispatch({ type: ActionTypes.POPULAR.POPULAR_LOAD_DEFAULT });
            const url = buildUrl(constants.API_KEY, constants.API_BASE_URL, "movie/popular", params);
            const response = await fetch(url);
            const json = await response.json();
            dispatch({
                type: ActionTypes.POPULAR.POPULAR_LOAD_DEFAULT_SUCCESS,
                page: json.page,
                results: json.results,
                total_pages: json.total_pages,
                total_results: json.total_results
            });
        } catch(error) {
            dispatch({ type: ActionTypes.POPULAR.POPULAR_LOAD_DEFAULT_FAILURE });
        }
    }
};

export default Actions;