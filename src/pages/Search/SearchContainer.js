import { bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Actions from "./actions/search-actions";
import Search from './Search';

const mapStateToProps = (state) => {
    return {
        results: state.Search.results,
        isError: state.Search.isError,
        isLoading: state.Search.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _setSearchTerm: bindActionCreators(Actions._setSearchTerm, dispatch),
        _loadSearchResults : bindActionCreators(Actions._loadSearchResults, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);