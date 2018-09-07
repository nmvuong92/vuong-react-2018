import { takeLatest, call, put, spawn, all, fork } from "redux-saga/effects";
import { watcherSaga } from './dogSaga';
export default function* rootSaga() {
    yield [
        fork(watcherSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        //fork(saga2),
    ];
 }