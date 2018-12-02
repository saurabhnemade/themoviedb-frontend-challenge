import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/trending-actions";
import Trending from './Trending';

const mapStateToProps = (state) => {
    return {
        trendingMovies: state.Trending.trendingMovies,
        isError: state.Trending.isError,
        isLoading: state.Trending.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _loadTrendingMovie : bindActionCreators(Actions._loadTrendingMovie, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
