import {
  SHOW_ALERT
} from '../../Constants'

const alertReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return action.alert
    default:
      return state;
  }
};

export default alertReducer;

