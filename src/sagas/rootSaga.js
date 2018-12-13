import { takeLatest, call, put, spawn, all, fork } from "redux-saga/effects";
import { authSaga } from './authSaga';
export default function* rootSaga() {
    yield all([
        //fork(dogSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(authSaga),
    ]);
}