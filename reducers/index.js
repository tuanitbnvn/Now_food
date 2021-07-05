import {combineReducers} from 'redux';
import Shop from './Shop'
import Cart from './Cart'
const rootReducer = combineReducers({
    Shop,
    Cart,
});
export default rootReducer;
