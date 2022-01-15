import React from 'react';
import { Div } from '../styled/about'
import JFJlogo from '../images/JFJLogo.jpg';

const About =() => {
    return(
        <Div>
            <container>
            <div class="about-section">
                <div class="landing-image">
                    <img src={JFJlogo} alt="JFJlogo" width="500"/>
                </div>
                <h1>About Us</h1>
                <p>Hi, I'm Megan and the owner of Jumping for Joy! My fiancé Travis and I are the parents of two little munchkins Peyton and Ezra - the inspiration behind the business.</p>
                <p>As we were unable to celebrate Peyton's birthday in 2020, we decided to plan a big 2nd birthday party for her, and needed something that would keep kids of ages 1-8 entertained, and for it to have big impact without the large price tag. Nor did we want the pressue of setting up/packing down or anything too messy, as our little Ezra was only 7 months old... so we thought 'let's hire a jumping castle!'</p>
                <p>After being unable to find and hire a budget-friendly jumping castle in the Redlands, I resorted to travelling 55 minutes down the coast to Coomera to hire one. This got me thinking, there must be more parents out there in the same boat as us... 6 months later, Jumping for Joy was created!</p>
            </div>
            </container>
        </Div>
    )
}

export default About;