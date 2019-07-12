
import {
  ADD_TYPE, REMOVE_TYPE
} from '../../Constants';

const colorReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TYPE:
      return [
        ...state,
        action.bagType
      ]
    case REMOVE_TYPE:
      return state.filter(bagType => bagType !== action.bagType)
    default:
      return state;
  }
}

export default colorReducer
