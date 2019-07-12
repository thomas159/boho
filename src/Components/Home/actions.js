import {
  ADD_TYPE, FILTERED_PRODUCTS
} from '../../Constants'


export function addType(bagType) {
  return {
    type: ADD_TYPE,
    bagType
  }
}

export function setFilteredProducts(filteredProducts) {
  return {
    type: FILTERED_PRODUCTS,
    filteredProducts
  }
}