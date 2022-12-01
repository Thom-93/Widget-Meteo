import './style.scss'

function Field({ value, onChange}:{value:string; onChange:any;}) {
  const handleChange = (evt:any) => {
    onChange(evt.target.value);
  };

  return (
    <input 
    className="inputZipCode" 
    name="inputZipCode"
    type="text" 
    value={value} 
    onChange={handleChange} 
    placeholder="exemple: 75001" 
    />
  );
}

export default Field;