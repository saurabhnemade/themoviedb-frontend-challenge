import { combineReducers} from "redux";
import App from './app';

/** For purpose of modularity of application, I don't consider keeping them in this directory.
 * Take a look at https://github.com/saurabhnemade/react-redux-magic-reducer which solves this problem.
 * I didn't ported it yet to React 16 api's but its example would describe exact modularity case
 * */
import Home from './../../pages/Home/reducer/Home';
import Trending from './../../pages/Trending/reducer/tredning';
import Popular from './../../pages/Popular/reducer/popular';
import Search from './../../pages/Search/reducer/search';
import MovieDetails from './../../pages/MovieDetails/reducer/movie-details';
import CastDetails from './../../pages/CastDetails/reducer/cast-details';

const rootReducer = combineReducers({
    App,
    Home,
    Trending,
    Popular,
    Search,
    MovieDetails,
    CastDetails
});

export default rootReducer;