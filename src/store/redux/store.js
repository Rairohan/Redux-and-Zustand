import {createStore} from 'redux';
import { likeReducer } from '../likeReducer';
export const store =  createStore(likeReducer)