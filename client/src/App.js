import './App.css';
import InputForm from './components/Form';
import {useState} from 'react'



function App() {

const[formShown, setFormShown] = useState(true)

const hideFormHandler = () => {
  setFormShown(false)
}
  return (
    <div className="App">
      <h1>Hello World</h1>

    {formShown &&  
    <InputForm 
        onSubmit = {() => console.log('submitted')} 
        onClose = {hideFormHandler} />}
    <button onClick = {() => {setFormShown(true)}}> show form</button>
    
      
    </div>
  );
}

export default App;
