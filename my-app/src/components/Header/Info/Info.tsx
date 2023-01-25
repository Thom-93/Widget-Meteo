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
      <span className="Header__Info--Span1">
        - Vous avez la possibiliter de tout remettre a zero en refaichissant ou en
        cliquant sur le logo "Thomas Weather" situer en haut a gauche du site
      </span>
    </div>
    </div>
  );
}

export default Info;
