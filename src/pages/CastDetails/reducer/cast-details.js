import ActionTypes from './../../../actions/index'

const initial_state = {
    castId: "0",
    isLoading: true,
    isError: false,
    details: {}
};

const Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.CAST_DETAIL.CAST_DETAIL_SET_ID:
            return {
                ...state,
                castId: action.movieId
            };
        case ActionTypes.CAST_DETAIL.CAST_DETAIL_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                details: action.details
            };
        case ActionTypes.CAST_DETAIL.CAST_DETAIL_LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: false
            };
        default:
            return state;
    }
};

export default Reducer;