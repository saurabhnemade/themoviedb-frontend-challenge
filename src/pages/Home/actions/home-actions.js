import constants from './../../../constants';
import ActionTypes from './../../../actions/index';
import { buildUrl} from "../../../Utils/Url";

const Actions = {
    _loadDefault: () => async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.HOME.HOME_LOAD_DEFAULT });
            const params = {
                language: "en-US",
                sort_by: "popularity.desc",
                include_adult: false,
                include_video: false,
                page: 1
            };

            const url = buildUrl(constants.API_KEY, constants.API_BASE_URL, "discover/movie", params);
            const response = await fetch(url);
            const json = await response.json();
            dispatch({
                type: ActionTypes.HOME.HOME_LOAD_DEFAULT_SUCCESS,
                page: json.page,
                results: json.results,
                total_pages: json.total_pages,
                total_results: json.total_results
            });
        } catch(error) {
            dispatch({ type: ActionTypes.HOME.HOME_LOAD_DEFAULT_FAILURE });
        }
    }
};

export default Actions;