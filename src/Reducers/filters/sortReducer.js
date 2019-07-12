
import {
  SET_SORT
} from '../../Constants';

const sortReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SORT:
      return action.sort
    default:
      return state;
  }
}

export default sortReducer
