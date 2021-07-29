import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
//import classes from './Form.module.css'
import "./Form.css"
import Modal from './Modal'


function InputForm(props) {

    const initialValues = {
        title: "",
        description: "",
        image: "",
        username: "",
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("must input a title"),
        descritption: Yup.string().required(),
        username: Yup.string().min(3).max(15),
        image: Yup.string().required()
    })
    const onSubmit = (data) => {
        props.onSubmit(data)
    }
    
    return (
        <Modal onClose = {props.onClose}>
        <div className = "formContainer">
            <Formik  initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className = "form" > 
                    <label>Title:</label>
                    <ErrorMessage name="title" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreateTitle" 
                        name ="title" 
                        placeholder="title goes here..."/> 
                    <label>Descritpiton:</label>
                    <ErrorMessage name="description" component="span"/>
                    <Field as="textarea"
                        autoComplete ="off"
                        id="inputCreateDescription" 
                        name ="descritpion" 
                        placeholder="Describe the place..."/> 
                    <label>Username:</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreateName" 
                        name ="username" 
                        placeholder="user (optional)..."/>
                    <label>Image:</label>
                    <ErrorMessage name="image" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreateImage" 
                        name ="image" 
                        placeholder="image"/>
                <button type = "submit">Add place</button> 
                </Form>
            </Formik>
        </div>
        </Modal>
    )
}

export default InputForm
