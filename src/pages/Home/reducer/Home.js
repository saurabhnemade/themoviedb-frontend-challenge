import ActionTypes from './../../../actions/index'

const initial_state = {
    page: 0,
    total_pages: 0,
    total_results: 0,
    recentMovies: [],
    isLoading: true,
    isError: false
};

const Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.HOME.HOME_LOAD_DEFAULT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ActionTypes.HOME.HOME_LOAD_DEFAULT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                page: action.page,
                total_pages: action.total_pages,
                total_results: action.total_results,
                recentMovies: action.results
            };
        case ActionTypes.HOME.HOME_LOAD_DEFAULT_FAILURE:
            return {
              ...state,
              isLoading: false,
              isError: true
            };
        default:
            return state;
    }
};

export default Reducer;