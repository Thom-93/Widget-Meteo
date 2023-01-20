import { useDispatch } from 'react-redux';
import { actionCheckAuthent } from '../../actions/user';
import Field from './Field/Field';
import './styles.scss'

function Form({ zipCode, changeField, searchMessage, isLoaded, }: { zipCode: number |string; changeField: Function; searchMessage: string; isLoaded: boolean;}) {
  const dispatch = useDispatch();


  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actionCheckAuthent());
  };
  const clickEffect = () => {

  }


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="pZipCode">Code Postal :</p>
        <Field
          value={zipCode}
          onChange={changeField}
        />

        <button className="buttonZipCode" onClick={clickEffect} type="submit" >Envoyé</button>
      </form>
      <p className={isLoaded ? 'searchDone' : 'searchError'} >
        {searchMessage}
      </p>
    </div>
  );
}

export default Form;