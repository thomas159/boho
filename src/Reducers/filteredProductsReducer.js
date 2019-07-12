import {
  FILTERED_PRODUCTS
} from '../Constants'

const filteredProductsReducer = (state = [], action) => {
  switch (action.type) {
    case FILTERED_PRODUCTS:
    return action.filteredProducts
    default:
      return state;
  }
};

export default filteredProductsReducer;

