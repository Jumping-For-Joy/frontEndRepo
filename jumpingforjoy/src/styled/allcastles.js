import styled from 'styled-components'

// entire page container
export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    text-align: center;
    a {
        color: #707070;
    }
    a:visited {
        color: #707070;
    }
    h3 {
        font-size: 20px;
        color: #707070;
        margin: 20px;
    }
    
    // tablet
    @media(min-width: 768px) {
        width: 800px;
        margin: auto;
    }
    // desktop
    @media(min-width: 1200px) {
        gap: 20px;
        width: 1100px;
        h3 {
            font-size: 30px;
         }
    }

`
// container for the cards only
export const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`

// container that holds link to add new button below cards
export const StyledDiv = styled.div`
    text-align: center;
    padding: 15px;
    width: 100%;

    // add new castle button at bottom of page
    a {
        text-decoration: none;
        padding: 12px;
        font-size: 15px;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        display: inline;
    }

    a:hover {
        text-decoration: none;
        color: #F8FEFE;
    }
    @media(min-width: 768px) {
        text-align: right;
    }
`

export const Card = styled.div`
    
    // mobile 
    
    width: 300px;
    height: 400px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8FEFE;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    color: #707070;
    a {
        text-decoration: none;
        color: #8AD7DB;
    }
    a:hover {
        color: #8AD7DB;
    }

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
    }

    // tablet

    @media(min-width: 768px) {
        margin: 10px;
    }

    // desktop

    @media(min-width: 1200px) {
        margin: auto;
        margin-bottom: 10px;
    }
`
export const UnavailableCard = styled(Card)`
    opacity: 0.6;
`
export const Header4 = styled.h4`
    font-size: 20px;
`