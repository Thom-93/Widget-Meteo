/* import React, { useState } from 'react'; */
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeField } from '../../actions/user';
import Form from '../Form/Form';
import MeteoWidget from '../MeteoWidget/MeteoWidget';
import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const zipCode = useSelector((state: any) => state.user.zipCode);
  const temperature = useSelector((state: any) => state.user.temperature);
  const icon = useSelector((state: any) => state.user.icon);
  const desc = useSelector((state: any) => state.user.desc);

  return (
    <div className="App">
      <section className='sectionMeteoWidget'>
        <MeteoWidget city="Dax" zipcode="40100" temperature={temperature} icon={icon} desc={desc} />
        <MeteoWidget city="Villemomble" zipcode="93250" temperature={temperature} icon={icon} desc={desc} />
        <MeteoWidget city="Savines-Le-Lac" zipcode="05160" temperature={temperature} icon={icon} desc={desc} />
        <MeteoWidget city="Colombiers" zipcode="34440" temperature={temperature} icon={icon} desc={desc} />
        <MeteoWidget city="Rennes" zipcode="35000" temperature={temperature} icon={icon} desc={desc} />
        <MeteoWidget city="Evreux" zipcode="27000" temperature={temperature} icon={icon} desc={desc} />
        <MeteoWidget city="Dijon" zipcode="21000" temperature={temperature} icon={icon} desc={desc} />
      </section>

      <Form
        zipCode={zipCode}
        changeField={(newValue: string) => {
          dispatch(actionChangeField(newValue));
          console.log('j\'ecris', newValue)
        }}
      />
    </div>
  );
}

export default App;
