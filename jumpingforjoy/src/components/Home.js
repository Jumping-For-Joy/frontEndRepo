import React from 'react';
import JUMPING1 from '../images/JUMPING1.png';
import { Section } from '../styled/home'

const Home =() => {
    return(
        <Section>
            <div class="container">
                <img src={JUMPING1} alt="Landing Image" width="600"/>
                <button class="btn">Shop Castles</button>
            </div>
        </Section>

    )
}

export default Home;