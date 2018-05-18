import {combineReducers} from 'redux';
import comments from './comments';
import users from './users.js';


const reducer = combineReducers({
		comments,
		users
});
