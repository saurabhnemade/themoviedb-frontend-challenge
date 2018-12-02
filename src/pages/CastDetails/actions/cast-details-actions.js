import constants from './../../../constants';
import ActionTypes from './../../../actions/index';
import { buildUrl} from "../../../Utils/Url";

const Actions = {
    _setCastId: (caseId) => (dispatch) => {
        dispatch({type: ActionTypes.CAST_DETAIL.CAST_DETAIL_SET_ID, caseId});
    },

    _loadCastDetails: (caseId) => async (dispatch) => {
        try {
            dispatch({type: ActionTypes.CAST_DETAIL.CAST_DETAIL_LOAD});
            const params = {
                append_to_response: "movie_credits"
            };

            const url = buildUrl(constants.API_KEY, constants.API_BASE_URL, `person/${caseId}`, params);
            const response = await fetch(url);
            const json = await response.json();
            dispatch({
                type: ActionTypes.CAST_DETAIL.CAST_DETAIL_LOAD_SUCCESS,
                details: json
            });
        } catch (error) {
            dispatch({type: ActionTypes.CAST_DETAIL.CAST_DETAIL_LOAD_FAILURE});
        }
    }
};

export default Actions;