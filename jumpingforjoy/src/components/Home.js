import React from 'react';
import jumpingcastle1 from '../images/jumpingcastle1';
import { Section } from '../styled/home'

const Home =() => {
    return(
        <Section>
            <div class="container">
                <img src={jumpingcastle1} alt="Landing Image" width="500"/>
                <button class="btn">Button</button>
            </div>
        </Section>

    )
}

export default Home;