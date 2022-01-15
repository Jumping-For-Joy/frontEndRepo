import styled from 'styled-components'

export const StyledFooter = styled.div`
    background: #F8FEFE;
    font-family: 'Open Sans', sans-serif;
    color: #707070;
    margin: 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    width: 85%;
    text-align: center;
    p {
        margin: 5px;
    }
    a, a:active, a:visited {
        text-decoration: none;
        color: #707070;
    }
    // desktop
    @media(min-width: 1200px) {
        width: 97%;
    }
`