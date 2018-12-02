import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/cast-details-actions";
import CastDetails from './CastDetails';

const mapStateToProps = (state) => {
    return {
        castId: state.CastDetails.castId,
        details: state.CastDetails.details,
        isLoading: state.CastDetails.isLoading,
        isError: state.CastDetails.isError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _setCastId : bindActionCreators(Actions._setCastId, dispatch),
        _loadCastDetails : bindActionCreators(Actions._loadCastDetails, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CastDetails);
