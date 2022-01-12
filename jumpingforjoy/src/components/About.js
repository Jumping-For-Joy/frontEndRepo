import React from 'react';
import { Div } from '../styled/about'
import JFJlogo from './JFJLogo.jpg';

const About =() => {
    return(
        <Div>
            <container>
            <div class="about-section">
                <div class="landing-image">
                    <img src={JFJlogo} alt="JFJlogo" width="500"/>
                </div>
                <h1>About Us</h1>
                <p>Some text about who we are and what we do.</p>
                <p>etc</p>
            </div>
            </container>
        </Div>
    )
}

export default About;