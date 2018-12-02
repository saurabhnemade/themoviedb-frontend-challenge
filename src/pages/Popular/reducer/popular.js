import ActionTypes from "../../../actions";

const initial_state = {
    page: 0,
    total_pages: 0,
    total_results: 0,
    popularMovies: [],
    isLoading: true,
    isError: false
};

const Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.POPULAR.POPULAR_LOAD_DEFAULT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ActionTypes.POPULAR.POPULAR_LOAD_DEFAULT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                page: action.page,
                total_pages: action.total_pages,
                total_results: action.total_results,
                popularMovies: action.results
            };
        case ActionTypes.POPULAR.POPULAR_LOAD_DEFAULT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case ActionTypes.POPULAR.POPULAR_SET_PAGE_NUMBER:
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
};

export default Reducer;