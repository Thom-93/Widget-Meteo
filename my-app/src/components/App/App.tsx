import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeField, actionCheckAuthent } from '../../actions/user';
import Form from '../Form/Form';
import MeteoWidget from '../MeteoWidget/MeteoWidget';
import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const zipCode = useSelector((state:any) => state.user.zipCode);

  return (
    <div className="App">
      <MeteoWidget city="Dax" zipcode="40100" />
      <MeteoWidget city="Villemomble" zipcode="93250" />
      <MeteoWidget city="Savines-Le-Lac" zipcode="05160" />
      <MeteoWidget city="Colombiers" zipcode="34440" />
      <MeteoWidget city="Rennes" zipcode="35000" />
      <MeteoWidget city="Evreux" zipcode="27000" />
      <MeteoWidget city="Dijon" zipcode="21000" />
      <Form
      zipCode={zipCode}
      changeField={(newValue:any, inputName:any) => {
        dispatch(actionChangeField(inputName, newValue));
      }}
      handleLogin={() => {
        dispatch(actionCheckAuthent());
      }}
      />
    </div>
  );
}

export default App;
