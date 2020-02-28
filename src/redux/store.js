import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const middlewares = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);
