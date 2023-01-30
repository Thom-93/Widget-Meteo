import { useDispatch } from "react-redux";
import { actionToggleNeedInfo } from "../../../actions/user";
import "./style.scss";

function Info({ logoInfo }:{ logoInfo:string }) {
  const dispatch = useDispatch();
  const handleCloseInfo = (): void => {
    dispatch(actionToggleNeedInfo());
  };
  return (
    <div className="Header__BlackScreen">
    <div className="Header__Info">
    <img src={logoInfo} className="Header__Info--InfoImg" alt="bulle d'information" />
    <button className="Header__Info__Btn--Close" onClick={handleCloseInfo}>x</button>
      <span className="Header__Info--Span1 FtSizeS">
        - Entrer une adresse postal ajoutera une autre ville
      </span>
      <span className="Header__Info--Span1">
        - Pour tout remettre a zero actualiser la page
      </span>
    </div>
    </div>
  );
}

export default Info;
