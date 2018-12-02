import constants from './../../../constants';
import ActionTypes from './../../../actions/index';
import { buildUrl} from "../../../Utils/Url";

const Actions = {
    _setSearchTerm: (term) => (dispatch) => {
        dispatch({type: ActionTypes.SEARCH.SEARCH_SET_TERM, term: term});
    },

    _loadSearchResults: (searchTerm, page) => async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.SEARCH.SEARCH_LOAD_DEFAULT});
            //TODO: check if query is empty and block on UI
            const params = {
                query: searchTerm,
                language: "en-US",
                include_adult: false,
                page: 1
            };

            const url = buildUrl(constants.API_KEY, constants.API_BASE_URL, "search/movie", params);
            const response = await fetch(url);
            const json = await response.json();
            dispatch({
                type: ActionTypes.SEARCH.SEARCH_LOAD_DEFAULT_SUCCESS,
                page: json.page,
                results: json.results,
                total_pages: json.total_pages,
                total_results: json.total_results
            });
        } catch (error) {
            dispatch({ type: ActionTypes.SEARCH.SEARCH_LOAD_DEFAULT_FAILURE });
        }
    },
    _setPage: (page) => (dispatch) => {
        dispatch({ type: ActionTypes.SEARCH.SEARCH_SET_PAGE_NUMBER, page });
    }
};

export default Actions;