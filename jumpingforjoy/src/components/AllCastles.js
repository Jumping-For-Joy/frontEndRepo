import React from 'react';
import {useGlobalState} from '../utils/stateContext'
import {Container, Card, StyledLink, HeaderDiv} from '../styled/allcastles'


const AllCastles =() => {
    const {store} = useGlobalState()
    const {castles, loggedInUser} = store

    return(
        <Container>
            <HeaderDiv>
                <section>
                    <h3>Jumping Castles</h3>
                </section>
                {loggedInUser && 
                    <section>
                        <StyledLink to={`/castles/new`}>Add New Castle</StyledLink>
                    </section>
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