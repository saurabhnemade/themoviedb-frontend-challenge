import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/trending-actions";
import Trending from './Trending';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _loadTrendingMovie : bindActionCreators(Actions._loadTrendingMovie, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
