import { useDispatch } from 'react-redux';
import { actionCheckAuthent } from '../../actions/user';
import Field from './Field/Field';
import './styles.scss'

function Form({ zipCode , changeField, }:{ zipCode:string; changeField:any; }) {
  const dispatch = useDispatch();


  const handleSubmit = (event:any) => {
    event.preventDefault();
    dispatch(actionCheckAuthent());
  };
  const clickEffect = () => {

  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="pZipCode">Code Postal :</p>
      <Field 
      value={zipCode}
      onChange={changeField}
      />

      <button className="buttonZipCode" onClick={clickEffect} type="submit" >Envoyé</button>
    </form>
  );
}

export default Form;