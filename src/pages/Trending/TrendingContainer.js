import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/trending-actions";
import Trending from './Trending';

const mapStateToProps = (state) => {
    return {
        trendingMovies: state.Trending.trendingMovies,
        isError: state.Trending.isError,
        isLoading: state.Trending.isLoading,
        page: state.Trending.page,
        total_pages: state.Trending.total_pages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _loadTrendingMovie : bindActionCreators(Actions._loadTrendingMovie, dispatch),
        _setPage: bindActionCreators(Actions._setPage, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
