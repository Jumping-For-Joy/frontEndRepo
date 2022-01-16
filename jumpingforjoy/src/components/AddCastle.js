import React from 'react';
import {useGlobalState} from '../utils/stateContext'
import { createCastle } from '../services/castleServices'
import CastleForm from './CastleForm'
import { StyledForm } from '../styled/shared/forms'
import { useNavigate } from 'react-router-dom';

const AddCastle = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const navigate = useNavigate()
    
    function formSubmit(submittedFormData) {
        createCastle(submittedFormData)
        .then((response) => {
            navigate(`/castles/${response.id}`)
        })
        .catch(error => console.log(error))
    }    

    return (
        <StyledForm>
            {loggedInUser && 
                <CastleForm formSubmit={formSubmit} castle={{}} />
            }
        </StyledForm>
    )
}

export default AddCastle;