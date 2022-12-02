import { useDispatch, useSelector } from 'react-redux';
import { actionChangeField } from '../../actions/user';
import Form from '../Form/Form';
import Loader from '../Loader/Loader';
import MeteoWidget from '../MeteoWidget/MeteoWidget';
import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state:any) => state.user.isLoaded);
  const zipCode = useSelector((state: any) => state.user.zipCode);
  const zipCodeFix = useSelector((state: any) => state.user.zipCodeFix);
  const city = useSelector((state: any) => state.user.city);
  const temperature = useSelector((state: any) => state.user.temperature);
  const icon = useSelector((state: any) => state.user.icon);
  const desc = useSelector((state: any) => state.user.desc);
  
  return (
    <div className="App">
      {!isLoaded ? <Loader /> : (
            <section className='sectionMeteoWidget'>
            <MeteoWidget city={city} zipCode={zipCodeFix} temperature={temperature} icon={icon} desc={desc} />
            <MeteoWidget city={city} zipCode={zipCodeFix} temperature={temperature} icon={icon} desc={desc} />
            <MeteoWidget city={city} zipCode={zipCodeFix} temperature={temperature} icon={icon} desc={desc} />
            <MeteoWidget city={city} zipCode={zipCodeFix} temperature={temperature} icon={icon} desc={desc} />
            <MeteoWidget city={city} zipCode={zipCodeFix} temperature={temperature} icon={icon} desc={desc} />
            <MeteoWidget city={city} zipCode={zipCodeFix} temperature={temperature} icon={icon} desc={desc} />
            <MeteoWidget city={city} zipCode={zipCodeFix} temperature={temperature} icon={icon} desc={desc} />
          </section>
      )}
      <Form
        zipCode={zipCode}
        changeField={(newValue: string) => {
          dispatch(actionChangeField(newValue));
        }}
      />
    </div>
  );
}

export default App;
