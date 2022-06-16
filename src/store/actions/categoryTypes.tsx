import * as actionTypes from './actionTypes';
import {Category} from '../../data/interfaces';

export const getCategory = (category: Category[]) => ({
  type: actionTypes.GET_CATEGORY,
  payload: category,
});

export const fetchCategory = (dispatch: any) => {
  fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => {
      dispatch({type: 'GET_CATEGORY', payload: response});
    })
    .catch(() => {
      return null;
    });
};
