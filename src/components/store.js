import AnimationReducer from '../../tailwind/animation/animation.reducer';
import DialogReducer from '../../tailwind/dialog/dialog.reducer';
import { moviesReducer } from './admin-panel/movies/movies.reducer';
import {legacy_createStore,combineReducers, applyMiddleware} from 'redux';
import redux_logger from 'redux-logger';
import redux_thunk from 'redux-thunk';
const middlewares = applyMiddleware(
    redux_logger,
    redux_thunk
);

const root = combineReducers({
    AnimationReducer,
    DialogReducer,
    moviesReducer
})

const store = legacy_createStore(root,{},middlewares);


export default store;
