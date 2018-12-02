import constants from './../../../constants';
import ActionTypes from './../../../actions/index';

const Actions = {
    _loadDefault: () => async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.HOME.HOME_LOAD_DEFAULT })
            const url = "https://api.themoviedb.org/3/discover/movie?api_key=606fac174296dbcf5c1e7f7fe67a9e77&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
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