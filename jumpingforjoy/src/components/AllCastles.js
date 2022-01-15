import React from 'react';
import {useGlobalState} from '../utils/stateContext'
import {Container, Card, StyledLink, HeaderDiv} from '../styled/allcastles'


const AllCastles =() => {
    const {store} = useGlobalState()
    const {castles, loggedInUser} = store

    return(
        <Container>
            <HeaderDiv>
                <h3>Jumping Castles For Hire</h3>
                {loggedInUser && 
                    <StyledLink to={`/castles/new`}>Add New Castle</StyledLink>
                }    
            </HeaderDiv>
            {castles.map((castle, index) => {
                return (
                    <Card key={castle.id}>
                        <StyledLink key={castle.id} to={`/castles/${castle.id}`}>
                        {castle.img_url && 
                            <div>
                                <img src={castle.img_url} alt={castle.name} />
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