import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getCastle, updateCastle} from '../services/castleServices'
import {useGlobalState} from '../utils/stateContext'
import CastleForm from './CastleForm'

const EditCastle = () => {
    const initialState = {
        name: undefined,
        description: undefined,
        imageUrl: undefined,
        price: undefined,
        available: undefined
    }

    const [formData, setFormData] = useState(initialState)
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


    function formSubmit(submittedFormData) {
        console.log('form being submitted ->', submittedFormData)
        updateCastle(submittedFormData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return(
        <div>
            {/* not rendering the form until we have the data bedcause id must be present before it loads */}            
            {loggedInUser && formData.id &&  
                <div>
                    <CastleForm formSubmit={formSubmit} castle={formData} />
                </div>}
        </div>
    )
}

export default EditCastle;