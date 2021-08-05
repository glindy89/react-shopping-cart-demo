import store from '../store'
import axios from 'axios'
/**
 * Create fetchAbout Action
 */
const requestProducts = () => {
  return {
    type: 'REQUEST_PRODUCTS'
  }
};

const receiveProducts = (data) => {
  return {
    type: 'RECEIVE_PRODUCTS',
    payload: data
  }
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(requestProducts());
    return axios.get(`assets/resources/data/products.json`)
      .then(json => {
        dispatch(receiveProducts(json.data));
      });
  };
};
