import { handleActions } from 'redux-actions';

import { addToFavourite, removeFromFavourite } from 'actions';
import { favouriteState } from 'constants/defaultState';

const defaultPayload = {beerId: ''};

export default {
    favourite: handleActions({
        [addToFavourite]: (state, { payload = defaultPayload }) => {
            const newState = { ...state, beerIds: [...state.beerIds] };

            newState.beerIds.push(payload.beerId);

            return newState;
        },
        [removeFromFavourite]: (state, { payload = defaultPayload }) => {
            const newState = {...state, beerIds: [...state.beerIds]};

            newState.beerIds = newState.beerIds.filter(beerId => beerId !== payload.beerId);

            return newState;
        },
    }, favouriteState),
};
