import React, { useState }  from 'react'
import axios from 'axios'
import './App.css';

async function postImage({image, description}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)
  
    const result = await axios.post('http://localhost:3001/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    return result.data
  }
  

function Images() {

    const [file, setFile] = useState()
    const [description, setDescription] = useState("")
    const [images, setImages] = useState([])
  
    const submit = async event => {
      event.preventDefault()
      const result = await postImage({image: file, description})
      setImages([result.image, ...images])
    }
  
    const fileSelected = event => {
      const file = event.target.files[0]
          setFile(file)
      }

    return(
        <div className = "images">
        <form onSubmit={submit} >
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
          <button type="submit">Submit</button>
        </form>
  
        { images.map( image => (
          <div key={image}>
            <img src={image}></img>
          </div>
        ))}
  
        <img src="http://localhost:3001/images/d5d2a78660e9f16287423feff67d4a80"></img>
  
      </div>
    )



}

export default Images