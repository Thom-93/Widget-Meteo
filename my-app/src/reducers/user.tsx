import {
  AUTHENT_SUCCESS,
  CHANGE_FIELD, CHECK_AUTHENT,
} from '../actions/user';

export const initialState = {
  zipCode: '',
};

const reducer = (state = initialState, action:any ) => {
  switch (action.type) {
    case CHECK_AUTHENT:
      return state;

    case CHANGE_FIELD:
      return {
        ...state,
        zipCode: action.payload.newValue,
      };

      case AUTHENT_SUCCESS:
        /*
        on met à jour isLogged dans le state
        et on sauvegarde le pseudo
        et on vide les inputs
        */
        return {
          ...state,
          zipCodeFix: action.payload.zipCodeFix,
          city: action.payload.city,
          temperature: action.payload.temperature,
          icon: action.payload.icon,
          desc: action.payload.desc,
          message: `Voici le resulta pour ${action.payload.zipCode}`,

        };

    default:
      return state;
  }

  
};

export default reducer;
