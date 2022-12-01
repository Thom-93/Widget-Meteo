export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_AUTHENT = 'CHECK_AUTHENT';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';

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
