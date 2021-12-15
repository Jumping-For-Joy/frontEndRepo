import React from 'react';
import JFJlogo from './JFJLogo.jpg';
import { Section } from '../styled/home'

const Home =() => {
    return(
        <Section>
        <div class="landing-image">
            <img src={JFJlogo} alt="JFJlogo" width="500"/>
        </div>
        </Section>
    )
}

export default Home;