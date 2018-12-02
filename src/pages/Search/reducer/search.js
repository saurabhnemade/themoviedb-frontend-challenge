import ActionTypes from './../../../actions/index'

const initial_state = {
    searchTerm: "",
    total_pages: 0,
    total_results: 0,
    results: [],
    isLoading: true,
    isError: false
};

const Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH.SEARCH_SET_TERM:
            return {
                ...state,
                searchTerm: action.term
            };
        case ActionTypes.SEARCH.SEARCH_LOAD_DEFAULT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ActionTypes.SEARCH.SEARCH_LOAD_DEFAULT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                page: action.page,
                total_pages: action.total_pages,
                total_results: action.total_results,
                results: action.results
            };
        case ActionTypes.SEARCH.SEARCH_LOAD_DEFAULT_FAILURE:
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