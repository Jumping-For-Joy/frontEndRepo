import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../utils/stateContext'
import Castle from './Castle'

const AllCastles =() => {
    // const [ castles, setCastles ] = useState([])
    const {store} = useGlobalState()
    const {castles} = store

    return(
        <div>
            <h1>Jumping Castles</h1>
            {/* This is where we would map through all castles */}
            {castles.map((castle, index) => {
                return (
                    <div key={castle.id}>
                    <div style={{border: 'solid 1px black', height: '200px', width: '200px'}}>Pretend I'm a picture!</div>
                    <Link key={castle.id} to={`/castles/${castle.id}`}>
                        {castle.name}
                        <Castle index={index} castle={castle} />
                    </Link>
                    <p>{castle.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AllCastles;