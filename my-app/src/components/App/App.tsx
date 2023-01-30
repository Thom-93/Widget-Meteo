import { useDispatch, useSelector } from "react-redux";
import { actionChangeField } from "../../actions/user";
import { GlobalState } from "../../reducers";
import logo from "../../assets/icon/cloud-name-icon.png";
import LogoInfo from "../../assets/icon/info.png";
import Form from "../Form/Form";
import Loader from "../Loader/Loader";
import MeteoWidget from "../MeteoWidget/MeteoWidget";
import "./styles.scss";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state: GlobalState) => state.user.isLoaded);
  const zipCode = useSelector((state: GlobalState) => state.user.zipCode);
  const zipCodeFix = useSelector((state: GlobalState) => state.user.zipCodeFix);
  const city = useSelector((state: GlobalState) => state.user.city);
  const temperature = useSelector(
    (state: GlobalState) => state.user.temperature
  );
  const icon = useSelector((state: GlobalState) => state.user.icon);
  const desc = useSelector((state: GlobalState) => state.user.desc);
  const message = useSelector((state: GlobalState) => state.user.message);

  const [widgets, setWidgets] = useState([] as JSX.Element[]);

  const increaseTab = () => {
    setWidgets([
      ...widgets,
      <MeteoWidget
        key={widgets.length + 1}
        city={city}
        zipCode={zipCodeFix}
        temperature={temperature}
        icon={icon}
        desc={desc}
      />
    ]);
  };

  useEffect(() => {
    if (isLoaded) {
      increaseTab();
    }
  }, [isLoaded]);

  const decreaseTab = () => {
    if (widgets.length > 1) {
      setWidgets(widgets.slice(0, widgets.length -1));
    }
  };

  return (
    <div className="App">
      <Header logo={logo} logoInfo={LogoInfo} />
      {!isLoaded ? (
        <Loader />
      ) : (
        <section className="sectionMeteoWidget">
          {widgets}
          <div id="moins" className="circle-plus" onClick={decreaseTab}>
            <div className="plus"></div>
          </div>
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
