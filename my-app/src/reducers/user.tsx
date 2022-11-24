import {
  CHANGE_FIELD, CHECK_AUTHENT, CHECK_ZIPCODE,
} from '../actions/user';

export const initialState = {
  logged: false,
  zipCode: '',
};

const reducer = (state = initialState, action= {}) => {
  switch (action.type) {
    case CHECK_AUTHENT:
      return state;

    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.inputName]: action.payload.newValue,
      };

      case CHECK_ZIPCODE:
        return {
          ...state,
          logged: true,
          zipCode: action.payload,
          message: `${action.payload.pseudo}`,
        };

    default:
      return state;
  }

  
};

export default reducer;
