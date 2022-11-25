import axios from 'axios';

import {
  actionAuthentSuccess,
  CHECK_AUTHENT,
} from '../../actions/user';

const authMiddelware = (store:any) => (next:any) => async (action:any) => {
  const API_KEY = 'f6888798e89c7be738a22c0619eb2a14';
  switch (action.type) {
    case CHECK_AUTHENT: {
      const { user } = store.getState();

      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${user.zipCode},fr&appid=${API_KEY}&units=metric&lang=fr`,
      ).then((response) => {
        const tempRound = Math.round(response.data.main.temp);
        store.dispatch(actionAuthentSuccess(tempRound, response.data.weather[0].icon, response.data.weather[0].description, response.data.name, user.zipCode,))
      }).catch((error) => {
        console.log(error);
        /* store.dispatch(actionSetAuthentError()); */
      });

      break;
    }

    default:
      break;
  }

  next(action);
};

export default authMiddelware;
