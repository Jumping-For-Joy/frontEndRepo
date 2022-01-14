import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getCastle, updateCastle} from '../services/castleServices'
import {useGlobalState} from '../utils/stateContext'
import CastleForm from './CastleForm'
import { Form } from '../styled/shared/forms'

const EditCastle = () => {
    const [formData, setFormData] = useState({})
    const {id} = useParams()
    const {store} = useGlobalState()
    const {loggedInUser} = store

    // load up the castle to edit
    useEffect(() => {
        getCastle(id)
        .then(castle => setFormData(castle))
        .then(castle => console.log(castle))
        .catch(error => console.error(error))
    }, [id])


    function formSubmit(submittedFormData) {
        console.log('form being submitted ->', submittedFormData)
        updateCastle(submittedFormData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return(
        <Form>
            {/* not rendering the form until we have the data */}            
            {loggedInUser && formData.id &&  
                <div>
                    <CastleForm formSubmit={formSubmit} castle={formData} />
                </div>}
        </Form>
    )
}

export default EditCastle;