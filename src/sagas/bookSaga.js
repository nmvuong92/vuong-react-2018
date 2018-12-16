import { call, put, takeLatest,fork } from 'redux-saga/effects';
import * as book_type from './../constaints/book-types';

const fetchBookJSON = (url, options = {}) =>
  new Promise((resolve, reject) => {
    return fetch(url, options)
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error));
  });



  function* fnGetBook({ payload: [] }) {
    const token = localStorage.getItem('token', token);  
    const options = {
      method: 'GET',
      headers: { 
          'authorization':token,
      }
    };
    try {
      const books = yield call(fetchBookJSON, "http://localhost:3003/api/book", options);
      yield put({ type: book_type.BOOK_GET_LIST_SUCCESS, payload: books });
    } catch (error) {
      let message;
      switch (error.status) {
        case 500: message = 'Internal Server Error'; break;
        case 401: message = 'Invalid credentials'; break;
        case 204: message = 'No content'; break;
        default: message = 'Something went wrong';
      }
      yield put({ type: book_type.BOOK_GET_LIST_FAILED, payload: message });
    }
  }
  export function* bookSaga() {
    yield takeLatest(book_type.BOOK_GET_LIST, fnGetBook);
  }