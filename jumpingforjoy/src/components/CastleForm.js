import React, {useState} from 'react';

const CastleForm = ({castle, formSubmit}) => {
    const [formData, setFormData] = useState({
        ...castle,
        available: castle.available ?? true // nullish coalesce - if null or undefined it will set to true
    })
    const [image, setImage] = useState(undefined)

    function changeHandler(event) {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function checkboxHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked
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
                img_url: data.url
            })    
        })    
        .catch(error => console.log(error))  
    }    

    return (
        <div>
            <form onSubmit={(event) => { event.preventDefault(); formSubmit(formData) }}>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler} 
                />

                <label>Price</label>
                <input 
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={changeHandler} 
                    />

                <label>Description</label>
                <input 
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={changeHandler} 
                />

                <label for="available">Mark as available:</label>
                <input
                    id="available"
                    type="checkbox"
                    name="available"
                    checked={formData.available} 
                    onChange={checkboxHandler}
                />

                <label>Add image</label>
                <input 
                    type="file"
                    name="castleImages"
                    onChange={attachImage}
                />

                <button onClick={fileUpload}>Upload image</button>
                <img src={formData.img_url} style={{width: "300px"}} alt="jumping castle" />
                <span><button type="submit">Save changes</button></span>
            </form>
        </div>
    )
}

export default CastleForm;