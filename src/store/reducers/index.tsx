import {combineReducers} from 'redux';
import {getProductReducer, setProductReducer} from './Product';
import categoryReducer from './Category';

const reducers = combineReducers({
  getProductReducer,
  setProductReducer,
  categoryReducer,
});
export default reducers;
