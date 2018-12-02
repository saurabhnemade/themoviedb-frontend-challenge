import { bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Actions from "./actions/search-actions";
import Search from './Search';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _loadSearchResults : bindActionCreators(Actions._loadSearchResults, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);