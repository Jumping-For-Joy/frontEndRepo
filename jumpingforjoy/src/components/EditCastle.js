import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import {getCastle, updateCastle} from '../services/castleServices'
import {useGlobalState} from '../utils/stateContext'
import CastleForm from './CastleForm'
import { StyledForm } from '../styled/shared/forms'

const EditCastle = () => {
    const [formData, setFormData] = useState({})
    const {id} = useParams()
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const navigate = useNavigate()

    // load up the castle to edit
    useEffect(() => {
        getCastle(id)
        .then(castle => {setFormData(castle)})
        .catch(error => console.error(error))
    }, [id])


    function formSubmit(submittedFormData) {
        updateCastle(submittedFormData)
        .then(response => navigate(`/castles/${response.id}`))
        .catch(error => console.log(error))
    }

    return(
        <StyledForm>
            {/* not rendering the form until we have the data */}            
            {loggedInUser && formData.id &&  
                <div>
                    <h3>Edit Castle</h3>
                    <CastleForm formSubmit={formSubmit} castle={formData} />
                </div>}
        </StyledForm>
    )
}

export default EditCastle;