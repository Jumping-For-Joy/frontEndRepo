import React from 'react';
import {useGlobalState} from '../utils/stateContext'
import {createCastle} from '../services/castleServices'
import CastleForm from './CastleForm'
import {Form} from '../styled/shared/forms'

const AddCastle = () => {
    // used to initiate state and to clear form once a castle is created
    // const initialState = {
    //     name: undefined,
    //     description: undefined,
    //     img_url: undefined,
    //     price: undefined,
    //     available: undefined
    // }
    
    // const [formData, setFormData] = useState(initialState)
    // const [image, setImage] = useState(undefined)
    const {store} = useGlobalState()
    const {loggedInUser} = store
    // const [formSubmitted, setFormSubmitted] = useState(false)
    
    function formSubmit(submittedFormData) {
        createCastle(submittedFormData)
        .then(response => console.log(response))
        // .then(() => setFormData(initialState))
        // .then(() => setFormSubmitted(true))
        .catch(error => console.log(error))
    }    

    return (
        
        <Form>
            {loggedInUser && 
                <CastleForm formSubmit={formSubmit} castle={{}} />
            }
        </Form>
    )
    }

    // function changeHandler(event) {
    //     event.preventDefault()
    //     // availability is being input as a string, but needs to be posted as a boolean
    //     let availableBoolean = Boolean(formData.available)
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //         available: availableBoolean
    //     })
    // }   

    // function attachImage(event) {
    //     setImage(event.target.files[0])
    // }

    // // upload the file from the form and assign them to formData
    // function fileUpload(event) {
    //     event.preventDefault()

    //     const upload = new FormData()
    //     upload.append("file", image)
    //     upload.append("upload_preset", "jumping-for-joy")
    //     upload.append("cloud_name", "adriana-developer")
    //     console.log('files -> ' , image)

    //     // this is where we handle image uploading before posting changes to the castle
    //     // setFormData({...formData, heroImgUrl: [event.target.files][0]})
    //     fetch("https://api.cloudinary.com/v1_1/adriana-developer/image/upload", 
    //         {
    //             method: "post",
    //             body: upload
    //     })            
    //     .then(response => response.json())
    //     .then((data) => {
    //         setFormData({
    //             ...formData,
    //             imageUrl: data.url
    //         })        
    //     })        
    //     .catch(error => console.log(error))  
    // }        


    // return(
    //     <div>{loggedInUser &&
    //         <div>
    //             <h3>New Jumping Castle</h3>
    //             <form onSubmit={formSubmit}>
    //             <label>Name</label>
    //                 <input 
    //                     type="text"
    //                     name="name"
    //                     value={formData.name}
    //                     onChange={changeHandler} 
    //                 />
    //                 <label>Description</label>
    //                 <input 
    //                     type="text"
    //                     name="description"
    //                     value={formData.description}
    //                     onChange={changeHandler} 
    //                 />
    //                 <label>Price</label>
    //                 <input 
    //                     type="number"
    //                     name="price"
    //                     value={formData.price}
    //                     onChange={changeHandler}
    //                 />
    //                 <label>Add image</label>
    //                 <input 
    //                     type="file"
    //                     name="imageUrl"
    //                     onChange={attachImage}
    //                 />
    //                 <button onClick={fileUpload}>Upload images</button>
    //                 <label>Availability</label>
    //                 <select value={formData.available} onChange={changeHandler}>
    //                     <option name="available" value={true}>Available</option>
    //                     <option name="available" value={false}>Unavailable</option>
    //                 </select>
    //                 <button type="submit">Save changes</button>
    //             </form>
//                 {formSubmitted && <p>Form submitted!</p>}
//             </div>}
//         </div>
//     )
// }

export default AddCastle;