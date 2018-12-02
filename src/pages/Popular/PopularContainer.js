import { bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Actions from "./actions/popular-actions";
import Popular from './Popular';

const mapStateToProps = (state) => {
    return {
        popularMovies: state.Popular.popularMovies,
        isLoading: state.Popular.isLoading,
        isError: state.Popular.isError,
        page: state.Popular.page,
        total_pages: state.Popular.total_pages
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        _loadPopularMovies : bindActionCreators(Actions._loadPopularMovies, dispatch),
        _setPage: bindActionCreators(Actions._setPage, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Popular);