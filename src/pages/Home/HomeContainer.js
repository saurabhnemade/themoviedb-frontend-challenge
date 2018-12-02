
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/home-actions";
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        recentMovies: state.Home.recentMovies,
        isLoading: state.Home.isLoading,
        isError: state.Home.isError,
        page: state.Home.page,
        total_pages: state.Home.total_pages
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        _loadDefault : bindActionCreators(Actions._loadDefault, dispatch),
        _setPage: bindActionCreators(Actions._setPage, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
