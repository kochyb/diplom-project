import {put, call, all, takeLatest, select} from 'redux-saga/effects';
import {startLoader, addBeers, endLoader, getData} from 'actions';
import {serverGet} from 'helpers/requests';
import {beerUrl, searchUrl} from 'constants/urls';

export function* getDataSaga() {
    try {
        const currentBeers = yield select(state => state.beers);

        if (!currentBeers.length) {
            yield put(startLoader());

            const beers = yield call(serverGet, beerUrl);
            // const current = yield call(serverGet, searchUrl);

            yield put(addBeers(beers));
            yield put(endLoader());
        }
    } catch (err) {
        console.log(err);
        yield put(endLoader());
    }
}

export function* getSearchSaga() {
    try {
        const current = yield call(serverGet, searchUrl);

        yield put(addBeers(current));
    } catch (err) {
        console.log(err);
    }
}

export default function* beers() {
    yield all([
        takeLatest(getData.toString(), getDataSaga),
        takeLatest(getData.toString(), getSearchSaga)
    ]);
}
