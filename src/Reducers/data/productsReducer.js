  import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from '../../Constants'

  const initialState = {
    items: [],
    loading: false,
    error: null
  };

  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: null
        };

      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          items: action.payload
        };

      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload.error,
          items: []
        };

      default:
        return state;
    }
  }