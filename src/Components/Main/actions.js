import {
  FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS ,FETCH_CATEGORIES_FAILURE,
  FETCH_SUB_CATEGORIES_REQUEST, FETCH_SUB_CATEGORIES_SUCCESS, FETCH_SUB_CATEGORIES_FAILURE,
  FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, ADD_TYPE,
  SHOW_ALERT
} from '../../Constants'
import { ipaddress } from '../../../config'
import {apiUrl} from '../../../config'

export const fetchCategories = () => async(dispatch) => {
  dispatch({ type: 'FETCH_CATEGORIES_REQUEST'})
  try {
   const data = await (await fetch(`${apiUrl}categories`)).json()
   dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: data})
  } catch (error) {
   dispatch({ type: 'FETCH_CATEGORIES_FAILURE', payload: error})
  }
}

export const fetchSubCategories = () => async(dispatch) => {
  dispatch({ type: 'FETCH_SUB_CATEGORIES_REQUEST'})
  try {
   const data = await (await fetch(`${apiUrl}sub-categories`)).json()
   dispatch({ type: 'FETCH_SUB_CATEGORIES_SUCCESS', payload: data})
  } catch (error) {
   dispatch({ type: 'FETCH_SUB_CATEGORIES_FAILURE', payload: error})
  }
}

export const fetchProducts = () => async(dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTS_REQUEST'})
  try {
    const data = await (await fetch(`${apiUrl}products`)).json()
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data})
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error})
  }
}

export const showAlert = () => ({
  type: SHOW_ALERT,
  alert: true
})

export const hideAlert = () => ({
  type: SHOW_ALERT,
  alert: false
})

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { ...products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
