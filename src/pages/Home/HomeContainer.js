
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import Actions from "./actions/home-actions";
import Home from './Home';

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        _loadDefault : bindActionCreators(Actions._loadDefault, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
