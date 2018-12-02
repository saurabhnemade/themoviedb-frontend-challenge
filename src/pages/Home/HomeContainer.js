
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/home-actions";
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        recentMovies: state.Home.recentMovies,
        isLoading: state.Home.isLoading,
        isError: state.Home.isError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        _loadDefault : bindActionCreators(Actions._loadDefault, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
