import { all, takeEvery, put, call } from 'redux-saga/effects';
import request from '../actions/connect';
import * as actions from '../actions';

const addContact = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            console.log('err', err);
            throw err
        });

const updateContact = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            console.log('err', err);
            throw err
        });

const delContact = async (path) =>
    await request.delete(path)
        .then(response => response.data)
        .catch(err => {
            console.log('err', err);
            throw err
        });

const getContact = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const PATH = '';

function* postContact(payload) {
    const { data } = payload;
    try {
        const datas = yield call(addContact, `${PATH}/contact`, data)
        yield put(actions.addContactSuccess(datas))
        console.log('berhasil add');
    } catch (error) {
        yield put(actions.addContactFailure(data))
    }
}

function* editContact(payload) {
    const { data } = payload;
    try {
        const datas = yield call(updateContact, `${PATH}/contact`, data)
        yield put(actions.editContactSuccess(datas))
    } catch (error) {
        yield put(actions.editContactFailure(data))
    }
}

function* deleteContact(payload) {
    const { data } = payload;
    console.log('data.id', data.id);
    try {
        const datas = yield call(delContact, `${PATH}/contact/${data.id}`)
        yield put(actions.deleteContactSuccess(datas))
    } catch (error) {
        yield put(actions.deleteContactFailure(data))
    }
}

function* loadContact() {
    try {
        const data = yield call(getContact, `${PATH}/contact`)
        yield put(actions.loadContactSuccess(data));
    } catch (error) {
        console.log(error)
        yield put(actions.loadContactFailure());
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery('POST_CONTACT', postContact),
        takeEvery('LOAD_CONTACT', loadContact),
        takeEvery('EDIT_CONTACT', editContact),
        takeEvery('DELETE_CONTACT', deleteContact),
    ])
}