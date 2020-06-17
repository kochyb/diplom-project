import { handleActions } from 'redux-actions';

import { addBeers, searchBeers } from 'actions';

import { beersState } from 'constants/defaultState';

export default {
    beers: handleActions({
        [addBeers]: (state, {payload = []}) => {
            return {origin: payload, current: payload};
        },
        [searchBeers]: (state, { payload = '' }) => {
            const newState = state.origin.filter(beer =>
            beer.name.toLowerCase().includes(payload.searchText.toLowerCase()));
            return { ...state, current: newState };
        },
    }, beersState),
};
