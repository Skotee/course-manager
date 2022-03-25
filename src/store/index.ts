// Add store creation, root reducer

// const store = {
// 	user: {
// 		isAuth: boolean, // default value - false. After success login - true
// 		name: string, // default value - empty string. After success login - name of user
// 		email: string, // default value - empty string. After success login - email of user
// 		token: string, // default value - empty string or token value from localStorage. After success login - value from API /login response. See Swagger.
// 	},
// 	courses: [], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response. See Swagger.
// 	authors: [], // list of authors. Default value - empty array. After success getting authors - value from API /authors/all response. See Swagger.
// };

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
	authors: authorsReducer,
	courses: coursesReducer,
	user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
