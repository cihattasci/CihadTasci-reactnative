import * as actionTypes from '../../actions/actionTypes';
import {Action, Product} from '../../../data/interfaces';

const getProductReducer = (state: Product[] = [], action: Action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

const pendingReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case actionTypes.PENDING_OFF:
      return action.payload;
    case actionTypes.PENDING_ON:
      return action.payload;
    default:
      return state;
  }
};

export {getProductReducer, pendingReducer};
