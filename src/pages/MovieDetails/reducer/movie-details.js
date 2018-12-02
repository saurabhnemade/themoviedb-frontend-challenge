import ActionTypes from './../../../actions/index'

const initial_state = {
    movieId: "0",
    isLoading: true,
    isError: false,
    details: {},
    casts: []
};

const Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_SET_ID:
            return {
               ...state,
               movieId: action.movieId
            };
        case ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                details: action.details
            };
        case ActionTypes.MOVIE_DETAIL.MOVIE_DETAIL_LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case ActionTypes.MOVIE_DETAIL.MOVIE_CAST_LOAD_SUCCESS:
            return {
                ...state,
                casts: action.casts
            };
        default:
            return state;
    }
};

export default Reducer;