import './App.css';
import InputForm from './components/Form';
import {useState, useEffect} from 'react'
import axios from 'axios'



function App() {

const[formShown, setFormShown] = useState(true)

const[listOfPlaces, setListOfPlaces] = useState([])

useEffect(() => {
  axios.get("http://localhost:3001/places").then((response) => {
  setListOfPlaces(response.data)
  })
}, [])

const hideFormHandler = () => {
  setFormShown(false)
}
const submitFormHandler = (data) => {
  axios.post("http://localhost:3001/places", data).then((response)=>{
    console.log("sent to db")
  })
  setFormShown(false)
}
  return (
    <div className="App">
      <h1>Hello World</h1>

    {formShown &&  
    <InputForm 
        onSubmit = {submitFormHandler} 
        onClose = {hideFormHandler} />}
    <button onClick = {() => {setFormShown(true)}}> show form</button>
    
    {listOfPlaces.map((value, key) => {
      return(
        <div key = {key}>
          {value.title}
          {value.description}
          {value.username}
          {value.image}
        </div>
      )
    })}
      
    </div>
  );
}

export default App;
