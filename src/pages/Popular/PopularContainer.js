import { bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Actions from "./actions/popular-actions";
import Popular from './Popular';

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        _loadPopularMovies : bindActionCreators(Actions._loadPopularMovies, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Popular);