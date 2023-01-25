import { useDispatch, useSelector } from 'react-redux';
import { actionToggleNeedInfo } from '../../actions/user';
import { GlobalState } from '../../reducers';
import Info from './Info/Info';
import './styles.scss'

function Header({ logo, logoInfo }:{ logo: string, logoInfo:string}) {
  const dispatch = useDispatch();
  const needInfo = useSelector((state:GlobalState) => state.user.needInfo)
  const handleOpenInfo = (): void => {
    dispatch(actionToggleNeedInfo());
  };
 return (
  <header className='header'>
  <img src={logo} className="topLogo" alt="logo Thomas Weather" />
  <img src={logoInfo} className="topLogoInfo" alt="bulle d'information" onClick={handleOpenInfo} />
  {needInfo ? (<Info logoInfo={logoInfo} />) : '' }
  </header>
 )
}

export default Header;