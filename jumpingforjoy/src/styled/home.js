import styled from 'styled-components'

export const Section = styled.section`
    
    // mobile + tablet 

    img {
        display: block;
        margin-top: 200px;
        justify-content: center;
        width: 100%;
    }

    // desktop

    @media(min-width: 1200px) {

    img {
        display: block;
        padding-top: 190px;
        justify-content: center;
        width: 40%;
        margin: auto;
    }
`