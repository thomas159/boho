import {
  SET_LANGUAGE
} from '../../../Constants'

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language
  }
}