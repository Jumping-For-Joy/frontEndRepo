import React from 'react';
import {useGlobalState} from '../utils/stateContext'
import { createCastle } from '../services/castleServices'
import CastleForm from './CastleForm'
import { Container } from '../styled/editcastle'
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
        <Container>
            {loggedInUser && 
                <CastleForm formSubmit={formSubmit} castle={{}} />
            }
        </Container>
    )
}

export default AddCastle;