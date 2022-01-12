import styled from 'styled-components'

export const Div = styled.div`
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
        text-align: center;
        color: #707070;
        font-family: 'Open Sans', sans-serif;
    }

    p {
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

    // tablet
    @media(min-width: 768px) {

    }

    // desktop
    @media(min-width: 1200px) {

    div.about-section {
        padding-top: 30px;
        margin-left: 600px;
        margin-right: 400px;
        margin-top: 60px;
        margin-bottom: 50px;
        width: 500px;
        align-items: center;
    }
    }
`