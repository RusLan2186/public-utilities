import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import count from './slices/countSlice';
import comments from './slices/commentsSlice';
import createSagaMiddleware from 'redux-saga';
import { commentsWatcher } from '../saga/commentsSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    count,
    comments,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ think: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(commentsWatcher);
