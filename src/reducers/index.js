import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favouriteReducer from 'reducers/favouriteReducer';
import loadReducer from 'reducers/loadReducer';
import beersReducer from 'reducers/beersReducer';

const reducers = persistReducer ( {
    key: 'root',
    storage,
    whitelist: [
        'favourite',
        'beers'
    ]
},
    combineReducers({
    ...favouriteReducer,
    ...loadReducer,
    ...beersReducer,
}));

export default reducers;
