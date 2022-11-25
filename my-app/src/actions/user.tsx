export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_ZIPCODE = 'CHECK_ZIPCODE';
export const CHECK_AUTHENT = 'CHECK_AUTHENT';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';


/*
* @param {string} newValue : la nouvelle valeur de l'input
* @param {string} inputName : le nom du champs dans le state
* @return {object} action
*/
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


export function actionCheckZipCode(zipCode:string) {
  return {
    type: CHECK_ZIPCODE,
    payload: {
      zipCode,
    },
  };
}

export function actionAuthentSuccess(temperature:any, icon:any, desc:any, city:string) {
  return {
    type: AUTHENT_SUCCESS,
    payload: {
      temperature,
      icon,
      desc,
      city,
    },
  };
}

/* class actionChangeField implements Action {
  readonly type = CHANGE_FIELD;

  constructor(public payload: {inputName:any, newValue:any}) {}
} */