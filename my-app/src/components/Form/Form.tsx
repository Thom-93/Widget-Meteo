import './styles.scss'

function Form({ zipCode , changeField, handleLogin, }:{ zipCode:string; changeField:any;
  handleLogin:any; }) {

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('envoyer');
    handleLogin();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="pZipCode">Code Postal :</p>
      <input 
      name="inputZipCode"
      type="text" 
      value={zipCode} 
      onChange={changeField} 
      className="inputZipCode" 
      placeholder="exemple: 75001" 
      />
      <button className="buttonZipCode" type="submit" >Envoyé</button>
    </form>
  );
}

export default Form;