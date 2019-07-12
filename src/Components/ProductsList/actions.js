import {
  FILTERED_PRODUCTS
} from '../../Constants'

export function setFilteredProducts(filteredProducts) {
  return {
    type: FILTERED_PRODUCTS,
    filteredProducts
  }
}