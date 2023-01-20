import axios from 'axios';
import { Middleware } from 'redux';

import {
  actionAuthentSuccess,
  actionSetAuthentError,
  CHECK_AUTHENT,
} from '../../actions/user';
import API_KEY from '../../API';

const authMiddelware: Middleware = (store) => (next) => async (action) => {
  
  switch (action.type) {
    case CHECK_AUTHENT: {
      const { user } = store.getState();
      const API = API_KEY;
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${user.zipCode},fr&appid=${API}&units=metric&lang=fr`,
      ).then((response) => {
        const tempRound = Math.round(response.data.main.temp);
        store.dispatch(actionAuthentSuccess(tempRound, response.data.weather[0].icon, response.data.weather[0].description, response.data.name, user.zipCode,))
      }).catch((error) => {
        console.log(error);
        store.dispatch(actionSetAuthentError());
      });

      break;
    }

    default:
      break;
  }

  next(action);
};

export default authMiddelware;
