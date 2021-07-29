import React from 'react'
import InputForm from './Form';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Home() {

const[formShown, setFormShown] = useState(false)

const[listOfPlaces, setListOfPlaces] = useState([])

const options = [
    'Location', 'User', 'Keyword'
  ];

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

const dropdownMenuHandler = (value) => {
    console.log(value.value)
}
    return (
        <div className="App">
        <h1>List of Cool Places</h1>
  
      {formShown &&  
      <InputForm 
          onSubmit = {submitFormHandler} 
          onClose = {hideFormHandler} />}

      <button className = "submission" onClick = {() => {setFormShown(true)}}> Add A New Place To the List</button>

      <Dropdown options={options} onChange={dropdownMenuHandler} value={"Sort By"} />;
  
      
      {listOfPlaces.map((value, key) => {
        return(
          <div className = "postContainer" key = {key}>
            <div className = "topBar">
                <div className = "title">{value.title}</div>
                <div className = "username">{value.username}</div>
            </div>
            <div className = "bottomBar">
                <div className = "image">{value.image}</div>
                <div className = "description">{value.description}</div>
                
            </div>
          </div>
        )
      })}
        
      </div>
    )
}

export default Home
