import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getCastles } from '../services/castleServices'
import { useGlobalState } from '../utils/stateContext'
import { Container, Card, StyledDiv, CardsDiv, Header4 } from '../styled/allcastles'
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
            {/* <HeaderDiv> */}
                <h3>Jumping Castles For Hire</h3>
            {/* </HeaderDiv> */}
                { error && <p>Something went wrong</p>}
                { loading ? 
                <Loading /> : 
                <CardsDiv>
                    {castles.map((castle, index) => 
                        <div key={castle.id}>
                            { castle.available && 
                                <Card>
                                    <Link key={castle.id} to={`/castles/${castle.id}`}>
                                        {castle.img_url && 
                                            <div>
                                                <img src={castle.img_url} alt={castle.name} />
                                            </div>
                                        }
                                        <Header4>{castle.name}</Header4>
                                    </Link>
                                </Card>
                            }
                        </div>
                    )}
                </CardsDiv>
            }
            {loggedInUser && 
                <StyledDiv>
                    <Link to={`/castles/new`}>Add New Castle</Link>
                </StyledDiv>
            }    
        </Container>
    )
}

export default AllCastles;