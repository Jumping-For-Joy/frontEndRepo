import React, {useState} from 'react';
import {useGlobalState} from '../utils/stateContext'
import {createCastle} from '../services/castleServices'

const AddCastle =() => {
    // used to initiate state and to clear form once a castle is created
    const initialState = {
        name: undefined,
        description: undefined,
        imageUrl: undefined
    }
    
    const [formData, setFormData] = useState(initialState)
    const [image, setImage] = useState(undefined)
    const {store} = useGlobalState()
    const {loggedInUser} = store

    function changeHandler(event) {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }   

    function attachImage(event) {
        setImage(event.target.files[0])
    }

    // upload the file from the form and assign them to formData
    function fileUpload(event) {
        event.preventDefault()

        const upload = new FormData()
        upload.append("file", image)
        upload.append("upload_preset", "jumping-for-joy")
        upload.append("cloud_name", "adriana-developer")
        console.log('files -> ' , image)

        // this is where we handle image uploading before posting changes to the castle
        // setFormData({...formData, heroImgUrl: [event.target.files][0]})
        fetch("https://api.cloudinary.com/v1_1/adriana-developer/image/upload", 
            {
                method: "post",
                body: upload
        })    
        .then(response => response.json())
        .then((data) => {
            setFormData({
                ...formData,
                imageUrl: data.url
            })    
        })    
        .catch(error => console.log(error))  
    }    

    function formSubmit(event) {
        event.preventDefault()
        createCastle(formData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        setFormData(initialState)
    }

    return(
        <div>{loggedInUser &&
                <form onSubmit={formSubmit}>
                <label>Castle name</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={changeHandler} 
                    />
                    <label>Castle description</label>
                    <input 
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={changeHandler} 
                    />
                    <label>Add image</label>
                    <input 
                        type="file"
                        name="imageUrl"
                        onChange={attachImage}
                    />
                    <button onClick={fileUpload}>Upload images</button>
                    <button type="submit">Save changes</button>
                </form>}
        </div>
    )
}

export default AddCastle;