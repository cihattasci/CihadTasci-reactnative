import * as actionTypes from './actionTypes';
import {Product} from '../../data/interfaces';
import {Alert} from 'react-native';

export const getProduct = (product: Product[]) => ({
  type: actionTypes.GET_PRODUCT,
  payload: product,
});

export const pendingOn = (pending: boolean) => ({
  type: actionTypes.PENDING_ON,
  payload: pending,
});

export const pendingOff = (pending: boolean) => ({
  type: actionTypes.PENDING_OFF,
  payload: pending,
});

export const fetchProducts = (
  dispatch: any,
  navigation: any,
  willGoBack: boolean,
) => {
  dispatch({type: 'PENDING_ON', payload: true});
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
    .then(() => {
      willGoBack && navigation.goBack();
    })
    .catch(() => {
      return null;
    })
    .finally(() => {
      dispatch({type: 'PENDING_OFF', payload: false});
    });
};

export const uploadProduct = (
  dispatch: any,
  data: Product,
  navigation: any,
) => {
  dispatch({type: 'PENDING_ON', payload: true});
  fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      fetchProducts(dispatch, navigation, true);
    })
    .catch(() => {
      dispatch({type: 'PENDING_OFF', payload: false});
      Alert.alert('Error', 'Something went wrong');
      return null;
    });
};
