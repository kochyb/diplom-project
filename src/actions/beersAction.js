import { createActions } from 'redux-actions';

export const {
    addBeers,
    searchBeers,
    getData,
    // sortAsc,
    // sortDesc
} = createActions(
    'ADD_BEERS',
    'SEARCH_BEERS',
    'GET_DATA',
    // 'SORT_ASC',
    // 'SORT_DESC'
);
