import * as actionTypes from './actionTypes';
import {Product} from '../../data/interfaces';

export const getProduct = (product: Product[]) => ({
  type: actionTypes.GET_PRODUCT,
  payload: product,
});

export const setProduct = (product: Product) => ({
  type: actionTypes.UPLOAD_PRODUCT,
  payload: product,
});

export const fetchProducts = (dispatch: any) => {
  fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => {
      dispatch({type: 'GET_PRODUCT', payload: response});
    })
    .catch(() => {
      return null;
    });
};
