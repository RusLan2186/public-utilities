import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_COMMENTS, loadComments } from '../redux/slices/commentsSlice';

const fetchCommentsFromApi = () => fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');

function* fetchCommentsWorker() {
  const data = yield call(fetchCommentsFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(loadComments(json));
}

export function* commentsWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
