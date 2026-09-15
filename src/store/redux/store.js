import {createStore} from 'redux';
import { likeReducer } from './likeReducer';
import { cartReducer } from './cartRedcuer';
// export const store =  createStore(likeReducer)
export const store = createStore(cartReducer)