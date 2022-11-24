export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_ZIPCODE = 'CHECK_ZIPCODE';
export const CHECK_AUTHENT = 'CHECK_AUTHENT';

export function actionChangeField(inputName:any, newValue:any) {
  return {
    type: CHANGE_FIELD,
    payload: {
      inputName,
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

/* class actionChangeField implements Action {
  readonly type = CHANGE_FIELD;

  constructor(public payload: {inputName:any, newValue:any}) {}
} */