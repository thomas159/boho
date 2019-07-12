import {combineReducers} from 'redux';
import languageReducer from './languageReducer'
import categoriesReducer from './data/categoriesReducer'
import subCategoriesReducer from './data/subCategoriesReducer'
import productsReducer from './data/productsReducer';
import typeReducer from './filters/typeReducer'
import alertReducer from './ui/alertReducer'
import filteredProductsReducer from './filteredProductsReducer'
import sortReducer from './filters/sortReducer'

const rootReducer = combineReducers({
  language: languageReducer,
  filteredProducts: filteredProductsReducer,
  data: combineReducers({
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    products: productsReducer,
  }),
  filters: combineReducers({
    types: typeReducer,
    sort: sortReducer,
  }),
  ui: combineReducers({
    alert: alertReducer
  })

});

export default rootReducer;