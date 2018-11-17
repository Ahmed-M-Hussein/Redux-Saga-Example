
import { put, takeLatest, all } from 'redux-saga/effects';
import { ADD_PERSON, DATA_READY , CALL_OTHER  ,CHANGE_OTHER} from './types'
import {message} from 'antd'
function* fetchData(action) {


    yield fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => console.log(response.json()));

    yield put({ type: DATA_READY, payload: action.payload,move:true });
}
function* actionWatcher() {
    yield takeLatest(ADD_PERSON, fetchData)
}


function* fetchOther(){

    yield fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => message.success("Data Loaded"));

    yield put({ type: CHANGE_OTHER ,move:false });

}

function* otherWatcher() {
    yield takeLatest(CALL_OTHER, fetchOther)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
        otherWatcher()
    ]);
}