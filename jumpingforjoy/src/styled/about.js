import styled from 'styled-components'

export const Div = styled.div`
    // mobile + tablet 
    div.about-section {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        align-items: center;
        width: 70%;
        background: #F8FEFE;
    }

    h1 {
        font-size: 20px;
        text-align: center;
        color: #707070;
        font-family: 'Open Sans', sans-serif;
    }

    p {
        font-size: 12px;
        font-family: 'Open Sans', sans-serif;
        color: #707070;
        text-align: center;
        padding-left: 15px;
        padding-right:15px;
        padding-bottom: 20px;
    }

    img {
        display: block;
        padding-top: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }


    // desktop
    @media(min-width: 1200px) {

    div.about-section {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
    }

    h1 {

        font-size: 30px;
        text-align: center;
        color: #707070;
        font-family: 'Open Sans', sans-serif;
    }

    p {
        font-size: 17px;
        font-family: 'Open Sans', sans-serif;
        color: #707070;
        text-align: center;
        padding-bottom: 20px;
    }

    img {
        display: block;
        padding-top: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }

    }
`