import React from 'react';
import JUMPING1 from '../images/JUMPING1.png';
import { Section } from '../styled/home'
import { StyledLink } from '../styled/home'

const Home =() => {
    return(
        <Section>
            <div class="container">
                <img src={JUMPING1} alt="LandingIMG" width="600"/>
                <StyledLink to={"/castles"}>Shop Castles</StyledLink>
            </div>
        </Section>

    )
}

export default Home;