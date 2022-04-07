import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from 'store/authReducer';
import { userReducer } from 'store/userReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, middleware);
