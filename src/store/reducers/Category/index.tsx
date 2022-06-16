import * as actionTypes from '../../actions/actionTypes';
import {Action, Category} from '../../../data/interfaces';

const categoryReducer = (state: Category[] = [], action: Action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
