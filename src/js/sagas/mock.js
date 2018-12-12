import { take } from 'redux-saga/effects';
import { START_FETCH } from '../actions';

export default function* () {
  while(true) {
    console.log('start');
    yield take(START_FETCH);
    console.log('end');
  }
}