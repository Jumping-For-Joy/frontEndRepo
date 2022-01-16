import React, { useState, useEffect } from 'react';
import { getCastles } from '../services/castleServices'
import { useGlobalState } from '../utils/stateContext'
import { Container, Card, StyledLink, HeaderDiv } from '../styled/allcastles'
import Loading from './Loading'

const AllCastles = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const [castles, setCastles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getCastles()
        .then((castles) => {
            setCastles([...castles])
            setLoading(false)
        })
        .catch((error) => {
            setError(true)
            console.log('get castles error:', error)
        })
    }, [])

    return(
        <Container>
            <HeaderDiv>
                <h3>Jumping Castles For Hire</h3>
                {loggedInUser && 
                    <StyledLink to={`/castles/new`}>Add New Castle</StyledLink>
                }    
            </HeaderDiv>
                { error && <p>Something went wrong</p>}
                { loading ? 
                <Loading /> : 
                <>
                    {castles.map((castle, index) => 
                        <div key={castle.id}>
                            { castle.available && 
                                <Card>
                                    <StyledLink key={castle.id} to={`/castles/${castle.id}`}>
                                        {castle.img_url && 
                                            <div>
                                                <img src={castle.img_url} alt={castle.name} />
                                            </div>
                                        }
                                        <h3>{castle.name}</h3>
                                    </StyledLink>
                                </Card>
                            }
                        </div>
                    )}
                </>
                }
        </Container>
    )
}

export default AllCastles;