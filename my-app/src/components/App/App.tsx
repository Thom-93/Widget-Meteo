import { useDispatch, useSelector } from 'react-redux';
import { actionChangeField } from '../../actions/user';
import { GlobalState } from '../../reducers';
import logo from '../../assets/icon/cloud-name-icon.png';
import Form from '../Form/Form';
import Loader from '../Loader/Loader';
import MeteoWidget from '../MeteoWidget/MeteoWidget';
import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state:GlobalState) => state.user.isLoaded);
  const zipCode = useSelector((state: GlobalState) => state.user.zipCode);
  const zipCodeFix = useSelector((state: GlobalState) => state.user.zipCodeFix);
  const city = useSelector((state: GlobalState) => state.user.city);
  const temperature = useSelector((state: GlobalState) => state.user.temperature);
  const icon = useSelector((state: GlobalState) => state.user.icon);
  const desc = useSelector((state: GlobalState) => state.user.desc);
  const message = useSelector((state: GlobalState) => state.user.message);

  return (
    <div className="App">
      <img src={logo} className='topLogo' alt="logo Thomas Weather" />
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
        isLoaded={isLoaded}
        searchMessage={message}
        zipCode={zipCode}
        changeField={(newValue: string) => {
          dispatch(actionChangeField(newValue));
        }}
      />
    </div>
  );
}

export default App;

