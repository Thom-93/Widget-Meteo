import { combineReducers } from 'redux';

import userReducer, { UserReducer } from './user';

export interface GlobalState {
  user: UserReducer;
}


const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
