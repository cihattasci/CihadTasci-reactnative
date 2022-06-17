import {combineReducers} from 'redux';
import {getProductReducer, pendingReducer} from './Product';
import categoryReducer from './Category';

const reducers = combineReducers({
  getProductReducer,
  pendingReducer,
  categoryReducer,
});
export default reducers;
