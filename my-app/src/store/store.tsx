import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddelware from '../components/middlewares/authMiddleware';

import reducer from '../reducers';

const composeEnhancers = composeWithDevTools;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddelware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
