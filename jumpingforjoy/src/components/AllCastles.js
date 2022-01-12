import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../utils/stateContext'


const AllCastles =() => {
    const {store} = useGlobalState()
    const {castles} = store

    return(
        <div>
                <h1>Jumping Castles</h1>
                {/* This is where we map through all castles from the database */}
                <Link to={`/castles/new`}>Add New Castle</Link>
                {castles.map((castle, index) => {
                    return (
                        <div key={castle.id}>
                            <Link key={castle.id} to={`/castles/${castle.id}`}>
                            {castle.img_url && 
                                <span>
                                    <img src={castle.img_url} style={{width: "400px"}}/>
                                    <h3>{castle.name}</h3>
                                </span>
                            }
                            </Link>
                        </div>
                    )
                })}
            
        </div>
    )
}

export default AllCastles;