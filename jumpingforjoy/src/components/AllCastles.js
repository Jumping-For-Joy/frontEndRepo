import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../utils/stateContext'
import {Container, Card, StyledLink, HeaderDiv} from '../styled/allcastles'


const AllCastles =() => {
    const {store} = useGlobalState()
    const {castles} = store

    return(
        <Container>
            <HeaderDiv>
                <h3>Jumping Castles For Hire</h3>
                {/* This is where we map through all castles from the database */}
                <StyledLink to={`/castles/new`}>Add New Castle</StyledLink>
            </HeaderDiv>
            {castles.map((castle, index) => {
                return (
                    <Card key={castle.id}>
                        <StyledLink key={castle.id} to={`/castles/${castle.id}`}>
                        {castle.img_url && 
                            <div>
                                <img src={castle.img_url}/>
                            </div>
                        }
                            <h3>{castle.name}</h3>
                        </StyledLink>
                    </Card>
                )
            })}
        </Container>
    )
}

export default AllCastles;