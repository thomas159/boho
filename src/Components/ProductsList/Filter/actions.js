import {
  ADD_TYPE, REMOVE_TYPE, FILTERED_PRODUCTS, SET_SORT
} from '../../../Constants'

export function addType(bagType) {
  return {
    type: ADD_TYPE,
    bagType
  }
}

export function removeType(bagType) {
  return {
    type: REMOVE_TYPE,
    bagType
  }
}

export function setFilteredProducts(filteredProducts) {
  return {
    type: FILTERED_PRODUCTS,
    filteredProducts
  }
}

export function setSort(sort) {
  return {
    type: SET_SORT,
    sort
  }
}