import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {deleteCastle, getCastle, updateCastle} from '../services/castleServices'
import {useGlobalState} from '../utils/stateContext'

const EditCastle = () => {
    const initialState = {
        name: undefined,
        description: undefined,
        imageUrl: undefined
    }

    const [formData, setFormData] = useState(initialState)
    const [image, setImage] = useState(undefined)
    const {id} = useParams()
    const {store} = useGlobalState()
    const {loggedInUser} = store

    // load up the castle to edit
    useEffect(() => {
        getCastle(id)
        .then(castle => setFormData(castle))
        .then(castle => console.log(castle))
        .catch(error => console.error(error))
    }, [])

    // reassign the state to the current form values being entered
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

    // upload the files from the form and assign them to formData
    function fileUpload(event) {
        event.preventDefault()

        const upload = new FormData()
        upload.append("file", image)
        upload.append("upload_preset", "jumping-for-joy")
        upload.append("cloud_name", "adriana-developer")
        // file -> event.target.files[0]
        // upload_preset = "jumping-for-joy"
        // cloud_name = adriana-developer
        // https://api.cloudinary.com/v1_1/adriana-developer/image/upload

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
        updateCastle(formData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    function handleDelete() {
        const confirmDelete = window.confirm("Are you sure you want to delete this castle? This is a permanent change that cannot be undone.")
        if (confirmDelete === true) {
            deleteCastle(id)
            .then(response => response.data)
            .catch(error => console.log(error))
        }
    }

    return(
        <div>
            {loggedInUser && 
                <div>
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
                        <label>Add images</label>
                        <input 
                            // multiple
                            type="file"
                            name="castleImages"
                            onChange={attachImage}
                        />
                        <button onClick={fileUpload}>Upload images</button>
                        <button type="submit">Save changes</button>
                    </form>
                    <button onClick={handleDelete}>Delete this castle</button>
                    <div>
                        {formData.imageUrl}
                    </div>
                </div>
            }    
        </div>
    )
}

export default EditCastle;