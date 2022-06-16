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

const setProductReducer = (
  state: Product = {
    id: '',
    name: '',
    price: 0,
    category: '',
    description: '',
    avatar: '',
    developerEmail: '',
    createdAt: '',
  },
  action: Action,
) => {
  switch (action.type) {
    case actionTypes.UPLOAD_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export {getProductReducer, setProductReducer};
