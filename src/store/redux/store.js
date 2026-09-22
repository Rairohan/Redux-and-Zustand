import {createStore} from 'redux';
import { likeReducer } from './likeReducer';
import { cartReducer } from './cartRedcuer';
import noteReducer from './noteReducer';
import { createStoreHook } from 'react-redux';
import todosReducer from './todosReducer';
// export const store =  createStore(likeReducer)
// export const store = createStore(cartReducer)
// export const store = createStore(noteReducer)
export const store = createStore(todosReducer)
