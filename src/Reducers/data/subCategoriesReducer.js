import {
  FETCH_SUB_CATEGORIES_REQUEST,
  FETCH_SUB_CATEGORIES_SUCCESS,
  FETCH_SUB_CATEGORIES_FAILURE
} from '../../Constants'

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function subCategoriesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SUB_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case FETCH_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload
      };

    case FETCH_SUB_CATEGORIES_FAILURE:
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
