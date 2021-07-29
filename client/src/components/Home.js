import React from 'react'
import InputForm from './Form';
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Home() {

let history = useHistory()

const[formShown, setFormShown] = useState(false)
const[listOfPlaces, setListOfPlaces] = useState([])
const[photo, setPhoto] = useState()
const[isPhoto, setIsPhoto] = useState(false)

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
  console.log(data)
  data.image= photo
  console.log(data)
  axios.post("http://localhost:3001/places", data).then((response)=>{
    console.log("sent to db")
  })
  setFormShown(false)
}

const dropdownMenuHandler = (value) => {
    console.log(value.value)
    history.push('/search')
}

const imageHandler = (imageFile) => {
    setPhoto(imageFile)
    console.log(imageFile)
    setIsPhoto(true)
}

    return (
        <div className="App">
        <h1>List of Cool Places</h1>
  
      {formShown &&  
      <InputForm 
          onSubmit = {submitFormHandler} 
          onClose = {hideFormHandler}
          onPassImage = {imageHandler} />}

    <div className = "elements">
        <button className = "submission" onClick = {() => {setFormShown(true)}}> Add A New Place To the List</button>
        <Dropdown className = "menu" options={options} onChange={dropdownMenuHandler} value={"Sort By"} />
    </div>
      
     
  
      
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

     {/* { isPhoto && <img alt = "Hadars photos" ref = "image" src = {require(photo.secure_url)} /> } */}
        
      </div>
    )
}

export default Home
