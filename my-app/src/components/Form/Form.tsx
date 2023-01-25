import { useDispatch } from 'react-redux';
import { actionCheckAuthent } from '../../actions/user';
import Field from './Field/Field';
import './styles.scss'

interface FormProps {
  zipCode: number |string,
  changeField: Function,
  searchMessage: string,
  isLoaded: boolean,
};

function Form({ zipCode, changeField, searchMessage, isLoaded, }: FormProps) {
  const dispatch = useDispatch();


  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actionCheckAuthent());
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="pZipCode">Code Postal :</p>
        <Field
          value={zipCode}
          onChange={changeField}
        />

        <button className="buttonZipCode" type="submit" >Envoyé</button>
      </form>
      <p className={isLoaded ? 'searchDone' : 'searchError'} >
        {searchMessage}
      </p>
    </div>
  );
}

export default Form;