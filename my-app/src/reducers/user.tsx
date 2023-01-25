import {
  AUTHENT_ERROR,
  AUTHENT_SUCCESS,
  CHANGE_FIELD, CHECK_AUTHENT, TOGGLE_NEEDINFO,
} from '../actions/user';

export interface UserReducer {
  isLoaded: boolean;
  zipCode: number | string;
  zipCodeFix: number | string;
  message: string;
  city: string;
  temperature: number;
  desc: string;
  icon: string;
  needInfo: boolean;
} 

export const initialState: UserReducer = {
  zipCode: '',
  isLoaded: false,
  zipCodeFix: '',
  message: '',
  city: '',
  temperature: 0,
  desc: '',
  icon: '',
  needInfo: false,
};

const reducer = (state = initialState, action:any ) => {
  switch (action.type) {
    case TOGGLE_NEEDINFO:
      return {
        ...state,
        needInfo: !state.needInfo,
      };

    case CHECK_AUTHENT:
      return {
        ...state,
        isLoaded:false,
      };

    case CHANGE_FIELD:
      return {
        ...state,
        zipCode: action.payload.newValue,
      };

      case AUTHENT_SUCCESS:
        /*
        on met à jour le state
        */
        return {
          ...state,
          isLoaded: true,
          zipCodeFix: action.payload.zipCodeFix,
          city: action.payload.city,
          temperature: action.payload.temperature,
          icon: action.payload.icon,
          desc: action.payload.desc,
          message: `Voici le resultat pour ${action.payload.zipCodeFix}`,
        };
        case AUTHENT_ERROR:
          return {
            ...state,
            isLoaded: false,
            message: 'Code postal invalide !',
          };

    default:
      return state;
  }

  
};

export default reducer;
