import ActionTypes from "../../../actions";
import {buildUrl} from "../../../Utils/Url";
import constants from "../../../constants";

const Actions = {
    _loadTrendingMovie: (page) => async (dispatch) => {
        try {
            const params = {
                page: page
            };
            dispatch({ type: ActionTypes.TRENDING.TRENDING_LOAD_DEFAULT });
            const url = buildUrl(constants.API_KEY, constants.API_BASE_URL, "trending/movie/week", params);
            const response = await fetch(url);
            const json = await response.json();
            dispatch({
                type: ActionTypes.TRENDING.TRENDING_LOAD_DEFAULT_SUCCESS,
                page: json.page,
                results: json.results,
                total_pages: json.total_pages,
                total_results: json.total_results
            });
        } catch(error) {
            dispatch({ type: ActionTypes.TRENDING.TRENDING_LOAD_DEFAULT_FAILURE });
        }
    },
    _setPage: (page) => (dispatch) => {
        dispatch({ type: ActionTypes.TRENDING.TRENDING_SET_PAGE_NUMBER, page });
    }
}

export default Actions;