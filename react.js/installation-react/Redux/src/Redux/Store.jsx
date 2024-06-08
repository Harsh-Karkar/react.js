import {createStore} from 'redux';
import CakeReducer from './Cake/CakeReducer';

const Store = createStore(CakeReducer)

export default Store;