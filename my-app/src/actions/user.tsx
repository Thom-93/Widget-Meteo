export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_AUTHENT = 'CHECK_AUTHENT';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';
export const AUTHENT_ERROR = 'AUTHENT_ERROR';

export function actionChangeField(newValue:string) {
  return {
    type: CHANGE_FIELD,
    payload: {
      newValue,
    },
  };
}

export function actionCheckAuthent() {
  return {
    type: CHECK_AUTHENT,
  };
}

/**
 * Action qui demande au reducer d'enregistrer un message d'erreur dans le state
 * @return Object d'action
 */
 export function actionSetAuthentError() {
  return {
    type: AUTHENT_ERROR,
  };
}

export function actionAuthentSuccess(temperature:number, icon:any, desc:string, city:string, zipCodeFix:string,) {
  return {
    type: AUTHENT_SUCCESS,
    payload: {
      temperature,
      icon,
      desc,
      city,
      zipCodeFix,
    },
  };
}
